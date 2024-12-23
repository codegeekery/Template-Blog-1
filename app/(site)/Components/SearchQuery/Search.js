'use client';
import * as React from 'react';

// Function for making fetch with react query
import { useSearchPosts } from '@/utils/usePosts';

// SHADCN
import { Button } from '@/components/ui/button';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

// icons lucide-react
import { Search, Loader2 } from 'lucide-react';

// Navigation useRouter using with router.push()
import { useRouter } from 'next/navigation';

// lib
import { cn } from '@/lib/utils';

// Converting the Date time to 2 min ago, 2 month ago, 2 years ago
import { dateUtils } from '@/utils/dateUtils';

// Sending Patch to field clicks in sanity
import { updatePostClicks } from '@/utils/UpdateClicks';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function to clear the timeout if value changes within the delay
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // Re-run effect only when value or delay changes

    return debouncedValue;
}

export function CommandSearch() {
    // Open Modal
    const [open, setOpen] = React.useState(false);
    
    // Save Search Term
    const [search, setSearch] = React.useState('');
    
    const useSearchDebounce = useDebounce(search, 700);

    // Retrieve the data after the coincidence term of search
    const { data, isLoading } = useSearchPosts(useSearchDebounce);
    
    // router.push for send the user after select post
    const router = useRouter();

    React.useEffect(() => {
        const toggleSearch = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((prev) => !prev);
            }
        };
        document.addEventListener('keydown', toggleSearch);
        return () => document.removeEventListener('keydown', toggleSearch);
    }, []);

    // After the user selects the post, this will execute and navigate to /posts while updating the clicks field in sanity
    const handleSelectPost = (slug, postId) => {
        setOpen(false);
        setSearch('');
        router.push(`/posts/${slug}`);
        updatePostClicks(postId);
    };

    return (
        <>
            <Button
                variant="outline"
                className={cn('relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2', open && 'border-primary')}
                onClick={() => setOpen(true)}
            >
                <Search className="h-4 w-4 xl:mr-2" />
                <span className="hidden xl:inline-flex">Search posts...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium xl:flex">
                    <span className="text-xs">ctrl</span>K
                </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={(isOpen) => { setOpen(isOpen); if (!isOpen) setSearch(''); }} className="w-auto max-w-lg p-4">
                <CommandInput placeholder="Search posts..." value={search} onValueChange={setSearch} />
                <CommandList>
                    {isLoading ? (
                        <CommandEmpty>Loading...</CommandEmpty>
                    ) : !data?.length ? (
                        <CommandEmpty>Not found post</CommandEmpty>
                    ) : (
                        data?.map((post) => (
                            <button
                                key={post._id}
                                className="flex gap-3 items-center border-b border-muted p-1 cursor-pointer hover:bg-slate-50 w-full"
                                onClick={() => handleSelectPost(post.slug.current, post._id)}
                            >
                                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg shadow-md relative">
                                    <img
                                        src={post.mainImage}
                                        alt={post.alt || 'Post Image'}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col items-start w-full">
                                    <div className="text-sm overflow-hidden">{post.title}</div> {/* Añadí overflow-hidden */}
                                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                                        <img
                                            src={post.avatar}
                                            alt={`${post.Author}'s Avatar`}
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />
                                        <span className="font-medium">{post.Author}</span>
                                        <span className="text-xs">{dateUtils(post.publishedAt)}</span>
                                    </div>
                                    <div className="mt-3 text-xs">
                                        <span className="font-semibold">Categories:</span>{' '}
                                        <span className="text-primary">{post.Categories?.join(', ') || 'None'}</span>
                                    </div>
                                </div>
                            </button>
                        ))
                    )}
                </CommandList>
            </CommandDialog>
        </>
    );
}

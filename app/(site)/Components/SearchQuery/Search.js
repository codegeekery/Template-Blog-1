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

// Converting the Date time to  2 min ago, 2 month ago, 2 years ago
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
    
    const useSearchDebounce = useDebounce(search, 700)

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

    // After the user select the post that the found so this will excecute and let the user to /posts and also update in sanity the clicks field inc 1++
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
                        <CommandEmpty className="flex justify-center">
                            <Loader2 className="animate-spin" />
                        </CommandEmpty>
                    ) : (
                        <>
                            {search && (
                                <CommandGroup>
                                    {data?.map((post) => (
                                        <CommandItem
                                            key={post._id}
                                            onSelect={() => handleSelectPost(post.slug.current, post._id)}
                                            className="group relative flex items-center gap-4 p-4 cursor-pointer w-full"
                                        >
                                            <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
                                                <img src={post.mainImage} alt={post.alt || 'Post Image'} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col justify-between w-full">
                                                <div className="font-bold text-lg text-primary break-words">{post.title}</div>
                                                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                                                    <img src={post.avatar} alt={`${post.authorName}'s Avatar`} className="w-6 h-6 rounded-full" />
                                                    <span>By {post.authorName}</span>
                                                    <span className="mx-2">•</span>
                                                    <span>{dateUtils(post.publishedAt)}</span>
                                                </div>
                                                <div className="mt-3 text-xs text-muted-foreground">
                                                    Categories: <span className="text-primary">{post.categories?.join(', ') || 'None'}</span>
                                                </div>
                                            </div>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            )}
                        </>
                    )}
                </CommandList>
            </CommandDialog>
        </>
    );
}

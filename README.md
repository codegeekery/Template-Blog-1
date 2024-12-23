# Template-5 - Ready-to-Deploy Blog Solution

## Overview

**Template-5** is a fully functional, ready-to-deploy template designed to help you quickly launch a customizable blog website. Whether you're an individual looking for a personal blog or a business in need of a content management solution, Template-5 provides an easy-to-use interface with everything you need to start publishing your content.

The template includes built-in features such as:

- **CMS Interface**: A simple, user-friendly content management system that allows easy management of blog posts.
- **Fully Responsive Design**: The template is optimized for mobile, tablet, and desktop use, ensuring an excellent user experience across all devices.
- **SEO Optimization**: Template-5 is designed with SEO best practices in mind, making it easier for your blog to rank in search engines.
- **Template Customization**: While the base template is ready-to-deploy, you can also customize it further depending on the unique needs of your business or personal brand.

This template is designed for seamless deployment and usage, and it is ideal for those who want to focus on content creation rather than spending hours configuring a blog from scratch.

## Key Features

- **Ready-to-Deploy**: Template-5 is ready to be deployed as-is with minimal configuration.
- **Content Management**: Easily add, edit, and manage posts and pages with the integrated CMS.
- **Search Functionality**: Built-in search to help your visitors find content quickly.
- **Categories and Tags**: Organize content using categories and tags.
- **Image Support**: Upload and display images for posts, with a responsive layout.
- **Comment Section**: Optionally add a comment section for reader interaction.

## Project Setup

To get started with **Template-5**, you'll need to follow the setup instructions below. This setup is crucial when you plan to sell the template to clients and host the blog for them.

### Prerequisites

Before deploying Template-5, ensure that you have the following:

- A **Sanity.io** account for content management.
- A **Render.com** account for hosting the blog.
- Basic knowledge of **React**, **Next.js**, and **Sanity** is helpful but not required.

### Step 1: Clone the Repository

To begin, clone the Template-5 repository to your local machine:

```bash
git clone https://github.com/your-repo/template-5.git
cd template-5
```

### Configure Environment Variables

For the project to function correctly, you need to set up three essential environment variables in your .env.local file. These variables are used to connect to your Sanity project and ensure seamless content management.

Create a .env.local file at the root of your project, and add the following variables:


```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=your-sanity-dataset
NEXT_PUBLIC_SANITY_TOKEN=your-sanity-api-token
```

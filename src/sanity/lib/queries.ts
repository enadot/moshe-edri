import { groq } from "next-sanity";

export const PAGE_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    seoTitle,
    seoDescription,
    "blocks": blocks[]{
      _type,
      _key,
      ...,
      _type == "heroBlock" => {
        ...,
        portrait{
          ...,
          asset->{
            _id,
            url,
            metadata { dimensions }
          }
        }
      },
      _type == "trustBarBlock" => {
        ...,
        logos[]{
          _key,
          name,
          url,
          image{
            ...,
            asset->{
              _id,
              url,
              metadata { dimensions }
            }
          }
        }
      },
      _type == "servicesGridBlock" => {
        ...,
        "services": services[]->{
          _id,
          title,
          slug,
          icon,
          shortDescription,
          highlights,
          order
        }
      },
      _type == "testimonialsBlock" => {
        ...,
        "testimonials": testimonials[]->{
          _id,
          name,
          role,
          quote,
          savings,
          category,
          type,
          videoUrl,
          image,
          featured
        }
      },
      _type == "faqBlock" => {
        ...,
        "items": items[]->{
          _id,
          question,
          answer,
          category,
          order
        }
      }
    }
  }
`;

export const HOMEPAGE_QUERY = groq`
  *[_type == "page" && slug.current == "home"][0]{
    _id,
    title,
    seoTitle,
    seoDescription,
    "blocks": blocks[]{
      _type,
      _key,
      ...,
      _type == "heroBlock" => {
        ...,
        portrait{
          ...,
          asset->{
            _id,
            url,
            metadata { dimensions }
          }
        }
      },
      _type == "trustBarBlock" => {
        ...,
        logos[]{
          _key,
          name,
          url,
          image{
            ...,
            asset->{
              _id,
              url,
              metadata { dimensions }
            }
          }
        }
      },
      _type == "servicesGridBlock" => {
        ...,
        "services": services[]->{
          _id,
          title,
          slug,
          icon,
          shortDescription,
          highlights,
          order
        }
      },
      _type == "testimonialsBlock" => {
        ...,
        "testimonials": testimonials[]->{
          _id,
          name,
          role,
          quote,
          savings,
          category,
          type,
          videoUrl,
          image,
          featured
        }
      },
      _type == "faqBlock" => {
        ...,
        "items": items[]->{
          _id,
          question,
          answer,
          category,
          order
        }
      }
    }
  }
`;

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0]{
    siteName,
    phone,
    mobile,
    whatsappNumber,
    whatsappMessage,
    logo,
    ogImage
  }
`;

export const ALL_SERVICES_QUERY = groq`
  *[_type == "service"] | order(order asc){
    _id,
    title,
    slug,
    icon,
    shortDescription,
    longDescription,
    highlights,
    order
  }
`;

export const ALL_TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"]{
    _id,
    name,
    role,
    quote,
    savings,
    category,
    type,
    videoUrl,
    image,
    featured
  }
`;

export const ALL_ARTICLES_QUERY = groq`
  *[_type == "article"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt
  }
`;

/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    pages: Page;
    categories: Category;
    courses: Course;
    organizers: Organizer;
    media: Media;
    users: User;
    redirects: Redirect;
    forms: Form;
    'form-submissions': FormSubmission;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    categories: {
      relatedCourses: 'courses';
    };
    organizers: {
      relatedCourses: 'courses';
    };
  };
  collectionsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    courses: CoursesSelect<false> | CoursesSelect<true>;
    organizers: OrganizersSelect<false> | OrganizersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    redirects: RedirectsSelect<false> | RedirectsSelect<true>;
    forms: FormsSelect<false> | FormsSelect<true>;
    'form-submissions': FormSubmissionsSelect<false> | FormSubmissionsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    header: Header;
    footer: Footer;
  };
  globalsSelect: {
    header: HeaderSelect<false> | HeaderSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: 'en' | 'de';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
            /**
             * Choose how the link should be rendered.
             */
            appearance?: ('default' | 'outline') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: (string | null) | Media;
  };
  layout: (CallToActionBlock | ContentBlock | TeaserBlock | TrainerBlock | MediaBlock | ArchiveBlock | FormBlock)[];
  meta?: {
    title?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    description?: string | null;
  };
  publishedAt?: string | null;
  slug?: string | null;
  slugLock?: boolean | null;
  parent?: (string | null) | Page;
  breadcrumbs?:
    | {
        doc?: (string | null) | Page;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  caption?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  _key?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      _key?: string | null;
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    square?: {
      _key?: string | null;
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    small?: {
      _key?: string | null;
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    medium?: {
      _key?: string | null;
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    large?: {
      _key?: string | null;
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    xlarge?: {
      _key?: string | null;
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    og?: {
      _key?: string | null;
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CallToActionBlock".
 */
export interface CallToActionBlock {
  richText?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          /**
           * Choose how the link should be rendered.
           */
          appearance?: ('default' | 'outline') | null;
        };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'cta';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContentBlock".
 */
export interface ContentBlock {
  columns?:
    | {
        size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
        richText?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        enableLink?: boolean | null;
        link?: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          /**
           * Choose how the link should be rendered.
           */
          appearance?: ('default' | 'outline') | null;
        };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'content';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TeaserBlock".
 */
export interface TeaserBlock {
  columns?:
    | {
        size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
        headline: string;
        richText?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        media?: (string | null) | Media;
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'teaserBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TrainerBlock".
 */
export interface TrainerBlock {
  richText?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  media: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'trainerBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MediaBlock".
 */
export interface MediaBlock {
  media: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'mediaBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ArchiveBlock".
 */
export interface ArchiveBlock {
  introContent?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  populateBy?: ('collection' | 'selection') | null;
  relationTo?: 'courses' | null;
  categories?: (string | Category)[] | null;
  limit?: number | null;
  selectedDocs?:
    | {
        relationTo: 'courses';
        value: string | Course;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'archive';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title: string;
  description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  relatedCourses?: {
    docs?: (string | Course)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  parent?: (string | null) | Category;
  breadcrumbs?:
    | {
        doc?: (string | null) | Category;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "courses".
 */
export interface Course {
  id: string;
  title: string;
  image?: (string | null) | Media;
  form: string | Form;
  start: string;
  end?: string | null;
  'inquiry-url'?: string | null;
  organizer?: (string | null) | Organizer;
  categories?: (string | Category)[] | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  meta?: {
    title?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
    description?: string | null;
  };
  publishedAt?: string | null;
  slug?: string | null;
  slugLock?: boolean | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: string;
  title: string;
  fields?:
    | (
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            defaultValue?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'checkbox';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'country';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'email';
          }
        | {
            message?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'message';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'number';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            options?:
              | {
                  label: string;
                  value: string;
                  id?: string | null;
                }[]
              | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'select';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'state';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textarea';
          }
      )[]
    | null;
  submitButtonLabel?: string | null;
  /**
   * Choose whether to display an on-page message or redirect to a different page after they submit the form.
   */
  confirmationType?: ('message' | 'redirect') | null;
  confirmationMessage?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  redirect?: {
    url: string;
  };
  /**
   * Send custom emails when the form submits. Use comma separated lists to send the same email to multiple recipients. To reference a value from this form, wrap that field's name with double curly brackets, i.e. {{firstName}}. You can use a wildcard {{*}} to output all data and {{*:table}} to format it as an HTML table in the email.
   */
  emails?:
    | {
        emailTo?: string | null;
        cc?: string | null;
        bcc?: string | null;
        replyTo?: string | null;
        emailFrom?: string | null;
        subject: string;
        /**
         * Enter the message that should be sent in this email.
         */
        message?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organizers".
 */
export interface Organizer {
  id: string;
  title: string;
  mail: string;
  url?: string | null;
  relatedCourses?: {
    docs?: (string | Course)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormBlock".
 */
export interface FormBlock {
  form: string | Form;
  enableIntro?: boolean | null;
  introContent?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'formBlock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
  id: string;
  /**
   * You will need to rebuild the website when changing this field.
   */
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?:
      | ({
          relationTo: 'pages';
          value: string | Page;
        } | null)
      | ({
          relationTo: 'courses';
          value: string | Course;
        } | null);
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?:
    | {
        field: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'categories';
        value: string | Category;
      } | null)
    | ({
        relationTo: 'courses';
        value: string | Course;
      } | null)
    | ({
        relationTo: 'organizers';
        value: string | Organizer;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'redirects';
        value: string | Redirect;
      } | null)
    | ({
        relationTo: 'forms';
        value: string | Form;
      } | null)
    | ({
        relationTo: 'form-submissions';
        value: string | FormSubmission;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  hero?:
    | T
    | {
        type?: T;
        richText?: T;
        links?:
          | T
          | {
              link?:
                | T
                | {
                    type?: T;
                    newTab?: T;
                    reference?: T;
                    url?: T;
                    label?: T;
                    appearance?: T;
                  };
              id?: T;
            };
        media?: T;
      };
  layout?:
    | T
    | {
        cta?: T | CallToActionBlockSelect<T>;
        content?: T | ContentBlockSelect<T>;
        teaserBlock?: T | TeaserBlockSelect<T>;
        trainerBlock?: T | TrainerBlockSelect<T>;
        mediaBlock?: T | MediaBlockSelect<T>;
        archive?: T | ArchiveBlockSelect<T>;
        formBlock?: T | FormBlockSelect<T>;
      };
  meta?:
    | T
    | {
        title?: T;
        image?: T;
        description?: T;
      };
  publishedAt?: T;
  slug?: T;
  slugLock?: T;
  parent?: T;
  breadcrumbs?:
    | T
    | {
        doc?: T;
        url?: T;
        label?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CallToActionBlock_select".
 */
export interface CallToActionBlockSelect<T extends boolean = true> {
  richText?: T;
  links?:
    | T
    | {
        link?:
          | T
          | {
              type?: T;
              newTab?: T;
              reference?: T;
              url?: T;
              label?: T;
              appearance?: T;
            };
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContentBlock_select".
 */
export interface ContentBlockSelect<T extends boolean = true> {
  columns?:
    | T
    | {
        size?: T;
        richText?: T;
        enableLink?: T;
        link?:
          | T
          | {
              type?: T;
              newTab?: T;
              reference?: T;
              url?: T;
              label?: T;
              appearance?: T;
            };
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TeaserBlock_select".
 */
export interface TeaserBlockSelect<T extends boolean = true> {
  columns?:
    | T
    | {
        size?: T;
        headline?: T;
        richText?: T;
        media?: T;
        link?:
          | T
          | {
              type?: T;
              newTab?: T;
              reference?: T;
              url?: T;
              label?: T;
            };
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TrainerBlock_select".
 */
export interface TrainerBlockSelect<T extends boolean = true> {
  richText?: T;
  media?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MediaBlock_select".
 */
export interface MediaBlockSelect<T extends boolean = true> {
  media?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ArchiveBlock_select".
 */
export interface ArchiveBlockSelect<T extends boolean = true> {
  introContent?: T;
  populateBy?: T;
  relationTo?: T;
  categories?: T;
  limit?: T;
  selectedDocs?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormBlock_select".
 */
export interface FormBlockSelect<T extends boolean = true> {
  form?: T;
  enableIntro?: T;
  introContent?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  relatedCourses?: T;
  parent?: T;
  breadcrumbs?:
    | T
    | {
        doc?: T;
        url?: T;
        label?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "courses_select".
 */
export interface CoursesSelect<T extends boolean = true> {
  title?: T;
  image?: T;
  form?: T;
  start?: T;
  end?: T;
  'inquiry-url'?: T;
  organizer?: T;
  categories?: T;
  content?: T;
  meta?:
    | T
    | {
        title?: T;
        image?: T;
        description?: T;
      };
  publishedAt?: T;
  slug?: T;
  slugLock?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organizers_select".
 */
export interface OrganizersSelect<T extends boolean = true> {
  title?: T;
  mail?: T;
  url?: T;
  relatedCourses?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  caption?: T;
  _key?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              _key?: T;
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        square?:
          | T
          | {
              _key?: T;
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        small?:
          | T
          | {
              _key?: T;
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        medium?:
          | T
          | {
              _key?: T;
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        large?:
          | T
          | {
              _key?: T;
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        xlarge?:
          | T
          | {
              _key?: T;
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        og?:
          | T
          | {
              _key?: T;
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects_select".
 */
export interface RedirectsSelect<T extends boolean = true> {
  from?: T;
  to?:
    | T
    | {
        type?: T;
        reference?: T;
        url?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms_select".
 */
export interface FormsSelect<T extends boolean = true> {
  title?: T;
  fields?:
    | T
    | {
        checkbox?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              defaultValue?: T;
              id?: T;
              blockName?: T;
            };
        country?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        email?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        message?:
          | T
          | {
              message?: T;
              id?: T;
              blockName?: T;
            };
        number?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        select?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              options?:
                | T
                | {
                    label?: T;
                    value?: T;
                    id?: T;
                  };
              required?: T;
              id?: T;
              blockName?: T;
            };
        state?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        text?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
        textarea?:
          | T
          | {
              name?: T;
              label?: T;
              width?: T;
              defaultValue?: T;
              required?: T;
              id?: T;
              blockName?: T;
            };
      };
  submitButtonLabel?: T;
  confirmationType?: T;
  confirmationMessage?: T;
  redirect?:
    | T
    | {
        url?: T;
      };
  emails?:
    | T
    | {
        emailTo?: T;
        cc?: T;
        bcc?: T;
        replyTo?: T;
        emailFrom?: T;
        subject?: T;
        message?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions_select".
 */
export interface FormSubmissionsSelect<T extends boolean = true> {
  form?: T;
  submissionData?:
    | T
    | {
        field?: T;
        value?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        subNavItems?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
              };
              description?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  navItems?:
    | T
    | {
        link?:
          | T
          | {
              type?: T;
              newTab?: T;
              reference?: T;
              url?: T;
              label?: T;
            };
        subNavItems?:
          | T
          | {
              link?:
                | T
                | {
                    type?: T;
                    newTab?: T;
                    reference?: T;
                    url?: T;
                    label?: T;
                  };
              description?: T;
              id?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  navItems?:
    | T
    | {
        link?:
          | T
          | {
              type?: T;
              newTab?: T;
              reference?: T;
              url?: T;
              label?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BannerBlock".
 */
export interface BannerBlock {
  style: 'info' | 'warning' | 'error' | 'success';
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'banner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CodeBlock".
 */
export interface CodeBlock {
  language?: ('typescript' | 'javascript' | 'css') | null;
  code: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'code';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
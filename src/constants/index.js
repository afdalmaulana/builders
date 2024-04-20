import {socialBranding, ads, brand} from "../assets"

export const navItems = [{
    name : 'Home',
    path : '/',
},
{
    name : 'About',
    path : '/about'
},
{
    name : 'Project',
    path : '/project',

},
{
    name : 'Our Service',
    path : '/ourservice'
},
{
    name : 'Blogs',
    path : '/blogs'
}]

export const ourServices = [
    {
        name : 'Branding Solution',
        desc : 'We provide extensive branding services to help your company build a strong brand image and stand out in competitive market',
        img : brand,
        path : '/branding'
    },
    {
        name : 'Social Media Management',
        desc : 'We provide professional and effective social media management services to help your company optimize',
        img : socialBranding,
        path : '/socialmedia'
    },
    {
        name : 'Advertising',
        desc : 'We provide professional and effective social media management services to help your company optimize',
        img : ads,
        path : '/advertising'
    }
]
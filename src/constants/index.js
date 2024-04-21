import {socialBranding, ads, brand, webDesign, uxui, wedding} from "../assets"

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
    path : '/ourService'
},
{
    name : 'Blogs',
    path : '/blogs'
}]

export const ourServices = [
    {
        name : 'Branding Solution',
        desc : "We offer comprehensive branding solutions to enhance your company's brand identity and differentiate it in a competitive market.",
        img : brand,
        path : '/branding'
    },
    {
        name : 'Social Media Management',
        desc : "We deliver comprehensive social media management services to elevate your brand's online presence and distinguish it in a crowded digital landscape.",
        img : socialBranding,
        path : '/socialmedia'
    },
    {
        name : 'Advertising',
        desc : "We provide targeted advertising solutions to boost your brand's visibility and set it apart in a competitive marketplace.",
        img : ads,
        path : '/advertising'
    },
    {
        name : 'Web Desgin',
        desc : "We provide targeted advertising solutions to boost your brand's visibility and set it apart in a competitive marketplace.",
        img : webDesign,
        path : '/webDesign'
    },
    {
        name : 'Wedding Invitation',
        desc : "We provide targeted advertising solutions to boost your brand's visibility and set it apart in a competitive marketplace.",
        img : wedding,
        path : '/dataAnalyst'
    },
    {
        name : 'UX UI Design',
        desc : "We provide targeted advertising solutions to boost your brand's visibility and set it apart in a competitive marketplace.",
        img : uxui,
        path : '/uxuiDesign'
    },
]
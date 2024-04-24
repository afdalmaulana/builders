import {socialBranding, ads, brand, webDesign, uxui, wedding, webExample, adsExample, brandExample, listIcons} from "../assets"

export const navItems = [{
    name : 'Home',
    path : '/',
},
{
    name : 'About',
    path : '/about'
},
{
    name : 'Client',
    path : '/client',

},
{
    name : 'Portfolio',
    path : '/portfolio'
}]

export const works = [
    {
        name : 'Company Profile',
        img : webExample,
    },
    {
        name : 'Branding Solution',
        img : brandExample,
    },
    {
        name : 'Advertisement',
        img : adsExample,
    },
]
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

export const visi = [
    {
        img : listIcons,
        alt : 'list',
        desc : 'To become a leading force in the digital realm, crafting impactful personal brands and delivering exceptional design solutions that resonate.'
    },
]

export const misi = [
    {
        img: listIcons,
        alt: 'list',
        desc: 'Our mission is to provide innovative web and UX/UI designs, ensuring seamless user experiences and elevating client presence.'
    },
    {
        img: listIcons,
        alt: 'list',
        desc: 'We aim to create compelling advertising strategies that drive engagement, increase visibility, and foster business growth.'
    },
    {
        img: listIcons,
        alt: 'list',
        desc: 'Building lasting partnerships, we prioritize client satisfaction, understanding their goals, and achieving mutual success.'
    }

]
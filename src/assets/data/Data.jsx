import behance from '../../assets/images/behance.svg'
import linkedIn from '../../assets/images/linkedIn.svg'
import email from '../../assets/images/email.svg'
import homeDecor from '../../assets/images/homeDecor.jpg'
import bakeryWeb from '../../assets/images/bakeryWeb.jpg'
import bakeryMobile from '../../assets/images/bakeryMobile.jpg'
import homeDecorCase from '../../assets/documents/homeDecorCase.pdf'
import mobileCase from '../../assets/documents/mobileCase.pdf'
import websiteCase from '../../assets/documents/websiteCase.pdf'

export const NavItems = [
    {
        title: 'Work',
        url: "/work",
        cName: "nav-links"
    },
    {
        title: 'About',
        url: "/about",
        cName: "nav-links"
    },
]

export const SocialIcons = [
    {
        image: linkedIn,
        url: 'https://www.linkedin.com/in/jessica-choi-55400623b',
        cName: 'social-links'
    },
    {
        image: behance,
        url: 'https://www.behance.net/jessicachoi9',
        cName: 'social-links'
    },
    {
        image: email,
        url: 'mailto:jessicahchoi93@gmail.com',
        cName: 'social-links'
    }
]

export const Projects = [
    {
        id: 1,
        cover: homeDecor,
        title: 'Home Decor & Furniture Website Concept',
        cName: 'case-title',
        pdf: homeDecorCase
    },
    {
        id: 2,
        cover: bakeryWeb,
        title: 'Bakery Website Concept',
        cName: 'case-title',
        pdf: websiteCase
    },
    {
        id: 3,
        cover: bakeryMobile,
        title: 'Bakery Mobile App Concept',
        cName: 'case-title',
        pdf: mobileCase
    }
]
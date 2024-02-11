import { RiHeadphoneFill } from "react-icons/ri";
import { FaPercent } from "react-icons/fa6";
import { LuTruck } from "react-icons/lu";
import { CgDollar } from "react-icons/cg";



export const categoryData = [
  {
    id: 1,
    title: "Man",
    url: "man",
  },
  {
    id: 2,
    title: "Jewellery",
    url: "jewellery",
  },
  {
    id: 3,
    title: "Woman",
    url: "woman",
  },
  {
    id: 4,
    title: "Electronics",
    url: "electronics",
  },
];

export const FAQ = [
  {
    title: "How can I place an order?",
    description:
      "To place an order, simply browse our products, add the items to your cart, and proceed to checkout. Follow the on-screen instructions to provide your shipping details and payment information.",
  },
  {
    title: "How do I contact customer support?",
    description:
      "You can reach our customer support team through the Contact Us page on our website or by sending an email to support@example.com. We strive to respond to inquiries within 24 hours.",
  },
  {
    title: "What payment methods do you accept?",
    description:
      "We accept a variety of payment methods, including credit/debit cards, PayPal, and other secure payment options. You can choose your preferred payment method during the checkout process.",
  },
  {
    title: "Can I modify or cancel my order after placing it?",
    description:
      "Unfortunately, once an order is placed, it cannot be modified or canceled. Please review your order carefully before confirming the purchase.",
  },

  {
    title: "Can I change my shipping address after placing an order?",
    description:
      "Once an order is confirmed, the shipping address cannot be changed. Please make sure to enter the correct address during the checkout process to avoid any delivery issues.",
  },
];

export const benefits = [
  {
    icon: LuTruck,
    title: "Free Shiping",
    description: "Oder above $1000",
  },
  {
    icon: CgDollar,
    title: "Return & Refund",
    description: "Money Back Gaurenty",
  },
  {
    icon: FaPercent,
    title: "Member Discount",
    description: "On every Order",
  },
  {
    icon: RiHeadphoneFill,
    title: "Customer Support",
    description: "Every Time Call Support",
  },
];

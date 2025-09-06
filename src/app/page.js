import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./home/hero/Hero";
import Category from "./home/category/Category";
import Product from "./home/products/Product";
import Testimonials from "@/component/testimonials/Testimonials";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <Category />
      <Product />
      <Testimonials />
    </main>
  );
}

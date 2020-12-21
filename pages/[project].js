import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Project() {
  const {
    query: { project },
  } = useRouter();


  return (
    <div className={styles.container}>
      <motion.h1 layoutId="header">{project}</motion.h1>
      <Link href="/">
   
        <motion.div><iframe  width="640" height="400" src={project === "midori" ? "https://www.loom.com/embed/328b3150aa184c52b92ffaf34b37eff3" : "https://www.loom.com/embed/38a9322267054843adb08ec95c7e5e87"} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></motion.div>

      </Link>
    </div>
  );
}



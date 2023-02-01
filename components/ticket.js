import Link from "next/link";

export default function Ticket({ children, href = "#", card }) {
  return (
    <Link href={href}>
      <div className={`card ${card}`}>
        <h2>{children}</h2>
        <i class="fas fa-arrow-right"></i>
        <p>a lonely trip.</p>
        <div class="pic"></div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="social">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-github"></i>
        </div>
        <button></button>
      </div>
    </Link>
  );
}

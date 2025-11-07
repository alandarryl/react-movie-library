import React from "react";
import "./about.css";

function AboutUs() {
    return (
        <section className="about-container">
        <h1>About Us</h1>
        <p>
            Welcome to our movie library! We built this platform to help movie lovers
            discover, explore, and enjoy films from all genres.
        </p>

        <p>
            This project uses the TMDB (The Movie Database) API to fetch real movie
            data. We don't store or host movies — we simply provide information and
            a clean interface to browse them.
        </p>

        <h2>Our Goal</h2>
        <p>
            To provide a fast, clean and enjoyable experience for movie discovery.
        </p>

        <h2>Contact</h2>
        <p>Email: contact@movielibrary.com</p>
        </section>
    );
}

export default AboutUs;

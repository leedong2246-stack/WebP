/**
 * 이동환 포트폴리오 메인 자바스크립트
 * 작성자: 이동환
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // 요소를 참조합니다.
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const backToTopBtn = document.getElementById("backToTop");
    const revealElements = document.querySelectorAll(".reveal");

    /* ==========================================================================
       1. 모바일 햄버거 메뉴 토글
       ========================================================================== */
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // 메뉴 항목 클릭 시 모바일 메뉴 자동 닫기
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    /* ==========================================================================
       2. IntersectionObserver를 이용한 스크롤 등장 애니메이션 (Reveal)
       ========================================================================== */
    const revealObserverOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    /* ==========================================================================
       3. IntersectionObserver를 이용한 현재 위치 네비게이션 메뉴 강조
       ========================================================================== */
    const sections = document.querySelectorAll("section[id]");

    const navObserverOptions = {
        threshold: 0.3
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => navObserver.observe(section));

    /* ==========================================================================
       4. 스크롤 위치 감지 (맨 위로 이동 버튼 표시)
       ========================================================================== */
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    // 맨 위로 이동 버튼 클릭 이벤트
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
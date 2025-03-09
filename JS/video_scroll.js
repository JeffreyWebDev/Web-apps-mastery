document.addEventListener("DOMContentLoaded", function () {
    
    // video animation of the customization section *******************************************************************************************

    const section = document.querySelector(".customization");
    const vid = section.querySelector("video");

    vid.pause();

    // Variables for smooth animation
    let lastKnownScrollPosition = 0;
    let ticking = false;

    // Function to update video playback based on scroll position
    const updateVideoPlayback = () => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = lastKnownScrollPosition;
        const viewportHeight = window.innerHeight;

        // Calculate the percentage of scroll within the section
        let percentage = (scrollPosition - sectionTop + viewportHeight) / (sectionHeight + viewportHeight);

        // Clamp the percentage to ensure it stays between 0 and 1
        percentage = Math.max(0, Math.min(1, percentage));

        // Update video time based on percentage
        if (vid.duration > 0) {
            vid.currentTime = vid.duration * percentage;
        }

        ticking = false; // Allow next animation frame
    };

    // Scroll event listener with requestAnimationFrame for smoother updates
    const onScroll = () => {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(updateVideoPlayback);
            ticking = true;
        }
    };

    // Initial update for the video playback
    updateVideoPlayback();
    window.addEventListener("scroll", onScroll);
});










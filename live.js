    // Array of video sources
    const videoSources = [
      "video1.mp4",
      "video2.mp4",
      "video3.mp4",
      "video4.mp4",
      "video5.mp4",
      "video6.mp4"
    ];

    // Function to create video boxes dynamically
    function createVideoBoxes() {
      const videoContainer = document.getElementById("videoContainer");

      // Loop through the video sources and create video boxes
      videoSources.forEach((src) => {
        const videoBox = document.createElement("div");
        videoBox.className = "video-box";

        const video = document.createElement("video");
        video.src = src;
        video.controls = true;

        videoBox.appendChild(video);
        videoContainer.appendChild(videoBox);
      });
    }

    // Function to add a new video box dynamically
    function addVideoBox() {
      const videoContainer = document.getElementById("videoContainer");
      const videoBox = document.createElement("div");
      videoBox.className = "video-box";

      const video = document.createElement("video");
      video.src = "new_video.mp4";
      video.controls = true;

      videoBox.appendChild(video);
      videoContainer.appendChild(videoBox);
    }

    // Add event listener to the "Live Stream" button
    document.getElementById("start-stream-btn").addEventListener("click", function() {
      // Check if there are already 3 video boxes in the last row
      if (document.getElementById("videoContainer").lastElementChild && document.getElementById("videoContainer").lastElementChild.children.length === 3) {
        // If so, create a new row by adding a flex-wrap: wrap style to the container
        document.getElementById("videoContainer").style.flexWrap = "wrap";
      }
      


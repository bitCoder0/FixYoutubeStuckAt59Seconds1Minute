function embedVideo() {
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    const videoContainer = document.getElementById('videoContainer');

    // Extract the video ID from the URL
    const videoId = extractVideoId(youtubeUrl);

    if (videoId) {
        const embedHtml = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        videoContainer.innerHTML = embedHtml;
    } else {
        videoContainer.innerHTML = '<p style="color: red;">Invalid YouTube URL</p>';
    }
}

function extractVideoId(url) {
    // Regular expression to match YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return null;
    }
}
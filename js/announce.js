document.addEventListener('DOMContentLoaded', () => {
    const announcementList = document.getElementById('announcement-list');

    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            if (data && data.announcements) {
                const reversedAnnouncements = data.announcements.reverse();

                reversedAnnouncements.forEach(announcement => {
                    const postContainer = document.createElement('div');
                    postContainer.className = 'post-container';
                    postContainer.innerHTML = `
                        <div class="post-header">
                            <div class="user-info">
                                <span class="username">${announcement.author}</span>
                            </div>
                            <span class="post-details">${announcement.date}</span>
                        </div>
                        <div class="post-body">
                            <h3 class="post-title">${announcement.title}</h3>
                            <p>${announcement.content}</p>
                        </div>
                    `;
                    announcementList.appendChild(postContainer);
                });
            }
        })
        .catch(error => console.error('Error loading articles:', error));
});


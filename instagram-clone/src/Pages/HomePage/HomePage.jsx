import React from 'react'

const HomePage = () => {
  return (
    <div>
        <div class="sidebar">
            <a href="#" class="logo"/>
                <img src="./Images/logo.png" alt="logo" />
            </a>
            {/* profile Image */}
            <div class="profile">
                <div class="profile-img">
                    <img src="./Images/profile.jpg" alt="profile" />
                </div>
                <div class="name">
                    <h1>Dua Lipa</h1>
                    <img src="./Images/verify.png" alt="verify" />
                </div>
                <span> @Lipa </span>
            </div>
            {/* About */}
            <div class="about">

                {/* Box 1 */}
                <div class="box">
                    <h3>54</h3>
                    <span> Posts </span>
                </div>
                {/* Box 2 */}
                <div class="box">
                    <h3>14.4k</h3>
                    <span> Followers </span>
                </div>
                {/* Box 3 */}
                <div class="box">
                    <h3>13</h3>
                    <span> Following </span>
                </div>
            </div>
        
            {/* Menu */}
            <div class="menu">
                <a href="#" class="active"/>
                    <span class="icon">
                        <i class="ri-function-line"></i>
                    </span>
                    Feed
                    </a>
                    <a href="#"/>
                    <span class="icon">
                        <i class="ri-notification-4-fill"></i>
                    </span>
                    Notification
                </a>
                <a href="#"/>
                    <span class="icon">
                        <i class="ri-search-line"></i>
                    </span>
                    Explore
                </a>
                <a href="#"/>
                <span class="icon">
                    <i class="ri-mail-unread-fill"></i>
                </span>
                Messages
                </a>
                <a href="#"/>
                    <span class="icon">
                        <i class="ri-send-plane-fill"></i>
                    </span>
                Direct
                </a>
                <a href="#"/>
                    <span class="icon">
                        <i class="ri-bar-chart-2-fill"></i>
                    </span>
                    Stats
                </a>
                <a href="#"/>
                    <span class="icon">
                        <i class="ri-settings-5-line"></i>
                    </span>
                    Settings
                </a>
                <a href="#"/>
                    <span class="icon">
                        <i class="ri-logout-box-r-line"></i>
                    </span>
                    Logout
                </a>
            </div>
        </div>
        
        {/* Main Home */}
        <div class="main-home">
            <div class="header">
            {/* search */}
                <div class="search">
                    <i class="ri-search-line"></i>
                    <input type="text" name="" id="" placeholder="Search"/>
                </div>
                <div class="header-content">
                    <i class="ri-notification-4-line"></i>
                    <i class="ri-mail-unread-fill"></i>
                    {/* Button */}
                    <a href="#" class="btn"/>
                    <i class="ri-add-circle-fill"></i>
                    <div class="btn-text">
                    Add Photos
                    </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="stories-title">
            <h1>Stories</h1>
            <a href="#" class="btn"/>
            <i class="ri-play-circle-line"></i>
            <div class="text">
            Watch all
            </div>
            </a>
        </div>
        <div class="stories">
        {/* Stories 1 */}
            <div class="stories-img color">
                <img src="./Images/profile.jpg" alt="profile"/>
                <div class="add">+</div>
            </div>
        {/* Stories 2 */}
        <div class="stories-img ">
            <img src="./Images/profile2.jpg" alt="profile"/>
        </div>
        {/* Stories 3 */}
        <div class="stories-img ">
            <img src="./Images/profile3.jpg" alt="profile"/>

        </div>
        {/* Stories 4 */}
        <div class="stories-img ">
            <img src="./Images/profile4.jpg" alt="profile"/>
        </div>
        {/* Stories 5 */}
        <div class="stories-img ">
            <img src="./Images/profile5.jpeg" alt="profile"/>
        </div>

      {/* Stories 7 */}
      <div class="stories-img ">
        <img src="./Images/profile7.jpg" alt="profile"/>


      </div>
      {/* Stories 8 */}
      <div class="stories-img ">
        <img src="./Images/profile8.jpg" alt="profile"/>


      </div>
      {/* Stories 9 */}
      <div class="stories-img ">
        <img src="./Images/profile9.jpg" alt="profile"/>


      </div>
      {/* Stories 10 */}
      <div class="stories-img ">
        <img src="./Images/profile10.jpg" alt="profile"/>


      </div>
    </div>
    <div class="feed">
      <h1> Feed </h1>
      <div class="feed-text">
        <h2>Latest</h2>
        <span>Popular</span>
      </div>
    </div>
    <div class="main-post">
      {/* Box1 */}
      <div class="post-box">
        <img src="./Images/post1.jpg" alt="post"/>
        <div class="post-info">
          <div class="post-profile">
            <div class="post-img">
              <img src="./Images/profile10.jpg" alt="profile"/>
            </div>
            <h3>Marquee B</h3>
          </div>
          <div class="likes">
            <i class="ri-heart-line"></i>
            <span>88.4k</span>
            <i class="ri-chat-3-line"></i>
            <span>88</span>
          </div>
        </div>
      </div>
      {/* Box2 */}
      <div class="post-box">
        <img src="./Images/post2.jpg" alt="post"/>
        <div class="post-info">
          <div class="post-profile">
            <div class="post-img">
              <img src="./Images/profile9.jpg" alt="profile"/>
            </div>
            <h3>John</h3>
          </div>
          <div class="likes">
            <i class="ri-heart-line"></i>
            <span>90k</span>
            <i class="ri-chat-3-line"></i>
            <span>100</span>
          </div>
        </div>
      </div>
      {/* Box3 */}
      <div class="post-box">
        <img src="./Images/post3.jpg" alt="post"/>
        <div class="post-info">
          <div class="post-profile">
            <div class="post-img">
              <img src="./Images/profile9.jpg" alt="profile"/>
            </div>
            <h3>Rose</h3>
          </div>
          <div class="likes">
            <i class="ri-heart-line"></i>
            <span>45.7k</span>
            <i class="ri-chat-3-line"></i>
            <span>40</span>
          </div>
        </div>
      </div>
      </div>
      </div>

  )
}

export default HomePage
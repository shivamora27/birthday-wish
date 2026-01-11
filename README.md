# 🎂 Happy Birthday Website 💕

A beautiful, animated birthday website to wish your wife a happy birthday with photos and heartfelt messages!

## 💍 Our Love Story
From friends → best friends → engaged → 2 years long distance → married last month!
Her birthday: **January 12th** 🎉

## ✨ Features

- 🎈 Floating balloons animation
- 🎂 **Interactive cake cutting with button** - Click to cut the cake!
- 🎆 **Fireworks explosion** - Beautiful fireworks show after cutting
- 🎵 **Happy Birthday audio** - Plays when cake is cut
- 🕯️ Animated birthday cake with flickering candles
- 📸 Photo gallery with hover effects
- 💌 Personal love letter section
- 🎊 Birthday wishes cards
- 🎉 Confetti animation
- ✨ Mouse sparkle effects
- ❤️ Interactive hearts
- 📱 Fully responsive design
- 🌈 Beautiful gradient backgrounds

## 🚀 How to Run Locally

### Option 1: Simple Double-Click (Easiest)
1. Simply double-click on `index.html` file
2. It will open in your default browser

### Option 2: Using Python (Recommended)
1. Open Terminal/Command Prompt
2. Navigate to the project folder:
   ```bash
   cd /path/to/birthday-wish
   ```
3. Run a local server:
   ```bash
   # For Python 3
   python3 -m http.server 8000
   
   # For Python 2
   python -m SimpleHTTPServer 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

### Option 3: Using Node.js
1. Install http-server globally (one-time setup):
   ```bash
   npm install -g http-server
   ```
2. Navigate to the project folder and run:
   ```bash
   http-server
   ```
3. Open the URL shown in the terminal

### Option 4: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📸 Adding Your Photos

1. Place your photos in the `photos` folder
2. Name them as:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`
   - `photo5.jpg`
   - `photo6.jpg`

3. Update captions in `index.html` (line ~95-120) to personalize each photo

**Note:** The website will show placeholder images if your photos aren't found. Replace them with your actual photos for the best experience!

## � Adding Happy Birthday Audio

1. Get a "Happy Birthday" song (MP3 format)
2. Name it `happy-birthday.mp3`
3. Place it in the `/birthday-wish/` folder (same location as index.html)
4. The song will play automatically when the cake is cut!

**See [AUDIO_SETUP.md](AUDIO_SETUP.md) for detailed audio setup instructions and free music sources.**

## �🎨 Customization

### Change Colors
Edit `styles.css` and modify the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify the Love Letter
Edit the letter content in `index.html` (around line 140-160)

### Add More Photos
1. Add more photo-card divs in `index.html`
2. Adjust the grid layout in `styles.css` if needed

### Change Birthday Wishes
Edit the wish cards in `index.html` (around line 190-210)

## 🎯 Interactive Features

- **🎂 "Cut the Cake" Button** - Click to cut the cake and trigger the celebration!
- **🎆 Fireworks Show** - Spectacular fireworks display after cutting the cake! 
- **🎵 Birthday Song** - Happy Birthday music plays during the celebration!
- **🕯️ Blow Out Candles** - Candles disappear when you cut the cake!
- **💖 Click on the cake** - Creates a burst of hearts!
- **💕 Click on hearts** - They float away!
- **🔍 Hover over photos** - Zoom effect!
- **✨ Mouse movement** - Creates sparkles!
- **🎭 Scroll down** - Smooth animations reveal content!

## 📂 Project Structure

```
birthday-wish/
│
├── index.html              # Main HTML file
├── styles.css              # All styling and animations
├── script.js               # Interactive features
├── happy-birthday.mp3      # Birthday song audio (you need to add this)
├── README.md               # This file
├── AUDIO_SETUP.md          # Audio setup instructions
└── photos/                 # Your photos go here
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

## 💝 Tips for Best Experience

1. **Use high-quality photos** (at least 800x600 pixels)
2. **View in full-screen** for the best experience
3. **Use Chrome or Firefox** for best compatibility
4. **Turn on sound** if you add music later
5. **Share the link** or host it online for remote viewing

## 🌐 Hosting Online (Optional)

Want to share it online? You can host it for free on:

- **GitHub Pages**: Free and easy
- **Netlify**: Drag and drop deployment
- **Vercel**: One-click deployment
- **Surge**: Simple command-line deployment

## 🎁 Made with Love

This website was created with ❤️ to make your girlfriend's birthday extra special!

Feel free to customize everything to make it uniquely yours! 🌟

---

**Happy Birthday to your beautiful wife! 🎉💕💍**

## Live Demo
Visit: https://shivampatidar.github.io/birthday-wish/

## Made with ❤️

python3 -m http.server 8000
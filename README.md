# 📺 CTV App Prototype

A prototype Connected TV (CTV) streaming app built using **React**, **Tailwind CSS**, and **Vite**, simulating a real-world OTT experience for large-screen devices like Samsung Tizen, LG webOS, and Chrome browser.

---

## Features

### Home Page
- **Hero Banner**: Auto-rotating featured content (using placeholder)
- **Content Rails**:
  - "Continue Watching", "Trending Now", "Most Liked", "New Releases"
  - Horizontally scrollable thumbnails (placeholder)
- **Keyboard Navigation**:
  - Arrow keys or remote D-pad support via `js-spatial-navigation`
  - Left/Right: scroll within a rail
  - Up/Down: move between rails
  - Enter: shows a modal simulating content selection

### Settings Page
Accessible via top horizontal **Main Menu** navigation:
- **Subscription Details**: Displays current plan and renewal status
- **Profile Settings**: Shows username, image (icon), and profile switch option (dummy but persistent)
- **Device Settings**: Mock list of devices with "rename" and "remove" dummy actions

---

## Technical Decisions

- **Framework**: React 19 with Vite for fast dev/build cycle
- **Navigation Management**: `js-spatial-navigation` to handle keyboard/D-pad navigation
- **Styling**: Tailwind CSS v3
- **State Management**: React Context for global modal and persistent settings (e.g. selected profile)
- **Persistence**: Local Storage for simulated persistent state (e.g. theme, selected profile)

---

## How to Run

### Prerequisites
- **Node.js** (>=18)
- **Tizen Studio** (with TV Extension SDK installed)
- **Chrome** (optional, for browser preview)

---

### Run in Browser (Dev Mode)
```bash
npm install
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in Chrome to test your app with arrow keys.

---

### Run on Samsung Tizen Simulator

#### 1. **Build the App**
```bash
npm run build:tizen
```

This generates a `dist/tizen` folder with production assets.

#### 2. **Package with Tizen Studio**
- Open **Tizen Studio**
- Go to: `File > Import > Tizen > Tizen Project`
- Select your project directory
- Confirm the platform is set to: `tv-samsung-8.0`

#### 3. **Run in Simulator**
- Right-click your project and select: `Run As > Tizen Web Simulator Application (Samsung TV)`
- The app should launch in the simulator window

---

## Known Limitations

- **Light Mode**: Structure in place, but styles not implemented yet
- **Login/Profile Switching**: Dummy logic only, no real auth
- **Mock Data Only**: No API integration — all data is hardcoded
- **No Unit Tests**: Testing setup not included yet

---

## TODOs

- [ ] Implement light mode styling using Tailwind CSS variants
- [ ] Add unit tests (e.g., for navigation, modal behavior)
- [ ] Support real profile switching

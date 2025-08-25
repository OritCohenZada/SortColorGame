# 🎨 SortColor Game

SortColor is a browser-based color sorting puzzle game built with **HTML, CSS, and JavaScript**.  
The player must organize colored blocks into columns within a limited time.

---

## 🚀 Game Flow
1. **Login Page**  
   - Player enters username, email, and password.  
   - If the user is new → redirected to signup page (with auto-filled details).  
   - If the user already exists → redirected directly to the game.  
   - Validation: usernames must be unique, password must follow rules.  

2. **Game Page**  
   - Instructions are displayed.  
   - Timer starts (90 seconds).  
   - Goal: Move blocks so each column is filled with 4 blocks of the same color.  
   - Win: All columns sorted → redirected to win screen.  
   - Lose: Time runs out → redirected to lose screen.  

---

## 🎮 Controls
- **New Game button** → Restart game.  
- **ctrl+ I** → Show instructions.  
- **ctrl+ Z** → Undo last move.  

---

## 🛠 Main Functions (Simplified Overview)
- `start()` → initializes game with random colors.  
- `choosecolorandbuild()` → generates random colors for columns.  
- `transfer()` → moves a block between columns if valid.  
- `full()` → checks if a column is complete.  
- `win()` / `lose()` → ends the game with result screen.  
- `newGame()` → resets and starts again.  
- `login` / `signup` handlers → manage user registration and login.  

---

## 💻 Technologies Used
- HTML5  
- CSS3  
- JavaScript (Vanilla)  

---

## ▶️ How to Run
1. Clone the repository:  
   ```bash
   git clone https://github.com/OritCohenZada/SortColorGame.git

2. Navigate into the project folder:
    cd SortColorGame

3. Open the project in your browser (you can simply open the Enter.html file).
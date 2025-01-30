𝐐𝐮𝐢𝐳𝐅𝐥𝐢𝐱 


𝐕𝐢𝐝𝐞𝐨 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 & 𝐐𝐮𝐢𝐳 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦

Overview
This project is a React and Firebase-based web application where users can watch educational videos, ask questions, and take quizzes to test their understanding. At the end of the quiz, users receive a performance report based on their answers.
Here some Screetshoot of projects workFlow-
![image](https://github.com/user-attachments/assets/e54990c1-773c-473d-9fc0-7182349d6764)
![image](https://github.com/user-attachments/assets/7d3ac288-a1b1-4deb-978a-876c530366af)
![image](https://github.com/user-attachments/assets/77f3faf1-899f-40fc-a00d-0ed5f2f36aab)
![image](https://github.com/user-attachments/assets/48abe696-571f-4c00-b3d1-8156bf1417ec)

![image](https://github.com/user-attachments/assets/839e22f0-2cd2-485f-acd6-7852b1636d9b)




The demostration of the project is here-
(https://github.com/user-attachments/assets/ed0dc3f9-2abf-415b-99de-9f737f45f63c)




Features
- User Authentication: Login and sign-up functionality using Firebase Authentication.
- Video Streaming: Users can watch different types of videos related to learning topics.
- Interactive Q&A: Users can ask questions related to the videos.
- Quiz System: Each video has an associated quiz for users to test their knowledge.
- Performance Report: After completing the quiz, users receive a report detailing their performance.
- Responsive UI: Optimized for different screen sizes.

Tech Stack
- Frontend: React.js (Hooks, Context API)
- Backend & Database: Firebase (Firestore, Authentication, Hosting)
- Deployment: Firebase Hosting
- State Management: Context API
- Styling: CSS 

Installation
1. Clone the repository:
   ```sh
   git clone [https://github.com/refayet-dev/QuizFlix.git]
   ```
2. Navigate to the project directory:
   ```sh
   cd QuizFlix
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and add Firebase configuration:
   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```
5. Start the development server:
   ```sh
   npm start
   ```

## Deployment
To deploy the application to Firebase Hosting:
```sh
firebase deploy
```

## Contribution
If you’d like to contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`)
3. Commit your changes.
4. Push to the branch and submit a pull request.

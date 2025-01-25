# Filmpire App

Filmpire is a movie discovery and watchlist management application developed using modern web technologies. The app allows users to search for movies, view detailed information, and manage a personalized watchlist. This project was created to enhance skills in React, Axios, and API integration.

---

## Features

- **Movie Search**: Search for movies using keywords and get instant results.
- **Detailed Movie Information**: View details such as title, synopsis, release date, ratings, and trailers.
- **Watchlist Management**: Add and remove movies from a personalized watchlist.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Technologies Used

- **Frontend**:

  - React
  - Axios
  - Tailwind CSS

- **Backend**:

  - Node.js
  - Express (for API mocking during development, if applicable)

- **APIs**:
  - TMDB (The Movie Database) API

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/filmpire.git
   cd filmpire
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your TMDB API key:

   ```env
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

---

## Usage

1. **Search Movies**:

   - Enter a keyword in the search bar to find movies.

2. **View Details**:

   - Click on a movie to view detailed information.

3. **Add to Watchlist**:

   - Click the "Add to Watchlist" button to save the movie to your watchlist.

4. **Remove from Watchlist**:
   - Navigate to your watchlist and click the "Remove" button for a movie.

---

## Folder Structure

```plaintext
src/
├── components/       # Reusable UI components
├── pages/            # Page-level components (e.g., Home, Watchlist)
├── services/        # API service files
├── styles/          # Global and Tailwind CSS styles
├── App.js           # Main application component
├── index.js         # Entry point for React
```

---

## Known Issues

- Ensure the TMDB API key is valid to avoid 401 errors.
- Watchlist data is currently not persisted. Future updates may include database integration.

---

## Future Enhancements

- **Authentication**: Add user authentication to personalize watchlists.
- **Database Integration**: Use a backend service to persist watchlist data.
- **Recommendations**: Display personalized movie recommendations.
- **Offline Support**: Enable offline access to the watchlist.

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for movie data.
- [React](https://reactjs.org/) for the frontend framework.
- [Tailwind CSS](https://tailwindcss.com/) for styling.

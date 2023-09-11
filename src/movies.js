// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectorsArr = moviesArray.map((movieDirector) => {
        return movieDirector.director;
    })
    return allDirectorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaSpiel = moviesArray.filter((movie) => {
        const movieSpiel = movie.director === 'Steven Spielberg';
        const isDrama = movie.genre.indexOf('Drama') >= 0;
        return movieSpiel && isDrama;
    });
    return dramaSpiel.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const sum = moviesArray.reduce((a, currMov) => {
        if (currMov.score) {
            return a + currMov.score;
        }
        else {
            return a;
        }
    }, 0);
    const avr = sum / moviesArray.length;
    return Number(avr.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((currMovie) => {
        return currMovie.genre.includes('Drama');
    });
    const avrDramaScore = scoresAverage(dramaMovies);
    return avrDramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray];
    sortedMovies.sort((movie1, movie2) => {
        if (movie1.year !== movie2.year) {
            return movie1.year - movie2.year;
        } else {
            return movie1.title.localeCompare(movie2.title);
        }
    });
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMoviesTitle = [...moviesArray];
    sortedMoviesTitle.sort((movie1, movie2) => {
        return movie1.title.localeCompare(movie2.title);
    })
    const newArray = sortedMoviesTitle.slice(0, 20).map(movie => movie.title);
    return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }

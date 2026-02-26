function getWinner(participants) {
    if (participants.length === 0) return null;
    
    const winner = participants.reduce((max, current) => {
        return current.score > max.score ? current : max;
    });
    
    return winner.name;
}

const participants = [
    { name: 'матвей', score: 85 },
    { name: 'темчик', score: 92 },
    { name: 'гера', score: 78 },
    { name: 'сырик', score: 96 },
];

const winnerName = getWinner(participants);
console.log(`самый большой score  у: ${winnerName}`);
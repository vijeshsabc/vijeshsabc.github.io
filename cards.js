function loadCards() {
  const cardsData = [
    {
      date: "18 May 2026",
      topic: "Session 1",
      description: "Exercise 6.7",
      isToday: false,
      youtubeLink: "9yP7_hJ4NRU"
    },
    {
      date: "18 May 2026",
      topic: "Session 2",
      description: "-",
      isToday: false,
      youtubeLink: "q9b-WboiuhY"
    },
    {
        date: "21 May 2026",
        topic: "Session 1",
        description: "6.9 Beginning of Example sums",
        isToday: false,
        youtubeLink: "IVUZ7Q_kBfA"
    },
    {
        date: "21 May 2026",
        topic: "Session 2",
        description: "6.9 End of Example sums",
        isToday: false,
        youtubeLink: "YFYO-wGm9EU"
    },
    {
        date: "21 May 2026",
        topic: "Session 3",
        description: "6.9 Beginning of Exercise sums",
        isToday: false,
        youtubeLink: "2Ixej5hNZ84"
    },
    {
        date: "21 May 2026",
        topic: "Session 4",
        description: "6.9 End of Exercise sums",
        isToday: false,
        youtubeLink: "DWp_016uAGQ"
    },
    {
        date: "22 May 2026",
        topic: "Session 1",
        description: "10.1 ",
        isToday: false,
        youtubeLink: "fl2XzB2su20"
    },
    {
        date: "22 May 2026",
        topic: "Session 2",
        description: "10.2 10.3",
        isToday: false,
        youtubeLink: "Z3Vb1BJO_pA"
    }
  ];

  cardsData.forEach(card => {
    createCard(card.date, card.topic, card.description, card.isToday, card.youtubeLink);
  });
}

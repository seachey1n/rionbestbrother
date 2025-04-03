const verses = [
    "Proverbs 27:17 – 'As iron sharpens iron, so one person sharpens another.'",
    "Proverbs 17:17 – 'A friend loves at all times, and a brother is born for adversity.'",
    "Ecclesiastes 4:9-10 – 'Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up.'",
    "John 15:13 – 'Greater love has no one than this: to lay down one's life for one's friends.'",
    "1 Thessalonians 5:11 – 'Therefore encourage one another and build each other up, just as in fact you are doing.'",
    "Proverbs 27:9 – 'Perfume and incense bring joy to the heart, and the pleasantness of a friend springs from their heartfelt advice.'",
    "Romans 12:10 – 'Be devoted to one another in love. Honor one another above yourselves.'",
    "Proverbs 18:24 – 'A man of many companions may come to ruin, but there is a friend who sticks closer than a brother.'",
    "Colossians 3:13 – 'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.'",
    "Hebrews 10:24-25 – 'And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.'",
    "1 Samuel 18:3 – 'Then Jonathan made a covenant with David, because he loved him as his own soul.'",
    "1 John 4:7 – 'Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God.'",
    "Job 6:14 – 'Anyone who withholds kindness from a friend forsakes the fear of the Almighty.'",
    "James 5:16 – 'Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.'",
    "Luke 6:31 – 'Do to others as you would have them do to you.'",
    "Matthew 18:20 – 'For where two or three gather in my name, there am I with them.'",
    "Philippians 2:3-4 – 'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.'",
    "Galatians 6:2 – 'Carry each other's burdens, and in this way you will fulfill the law of Christ.'",
    "1 Corinthians 15:33 – 'Do not be misled: Bad company corrupts good character.'",
    "James 4:8 – 'Draw near to God, and He will draw near to you.'"
];

document.getElementById("verseButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    document.getElementById("verse").innerText = verses[randomIndex];
});

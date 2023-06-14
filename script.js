// Array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "If you want to achieve greatness, stop asking for permission. - Anonymous",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "If you're going through hell, keep going. - Winston Churchill",
  "Don't count the days, make the days count. - Muhammad Ali",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The secret of getting ahead is getting started. - Mark Twain",
  "The best revenge is massive success. - Frank Sinatra",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "The harder the conflict, the greater the triumph. - George Washington",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
  "It does not matter how slowly you go, as long as you do not stop. - Confucius",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Do one thing every day that scares you. - Eleanor Roosevelt",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "It always seems impossible until it's done. - Nelson Mandela",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "If you want to achieve greatness, stop asking for permission. - Anonymous",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "If you're going through hell, keep going. - Winston Churchill",
  "Don't count the days, make the days count. - Muhammad Ali",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The secret of getting ahead is getting started. - Mark Twain",
  "The best revenge is massive success. - Frank Sinatra",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "The harder the conflict, the greater the triumph. - George Washington",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
  "It does not matter how slowly you go, as long as you do not stop. - Confucius",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Do one thing every day that scares you. - Eleanor Roosevelt",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "It always seems impossible until it's done. - Nelson Mandela",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "If you want to achieve greatness, stop asking for permission. - Anonymous",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "If you're going through hell, keep going. - Winston Churchill",
  "Don't count the days, make the days count. - Muhammad Ali",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The secret of getting ahead is getting started. - Mark Twain",
  "The best revenge is massive success. - Frank Sinatra",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "The harder the conflict, the greater the triumph. - George Washington",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
  "It does not matter how slowly you go, as long as you do not stop. - Confucius",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Do one thing every day that scares you. - Eleanor Roosevelt",
  "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
  "It always seems impossible until it's done. - Nelson Mandela",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Dream big and dare to fail. - Norman Vaughan",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Believe in the power of your dreams. - Unknown",
  "The best revenge is massive success. - Frank Sinatra",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Believe you deserve it and the universe will serve it. - Unknown",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. - Chantal Sutherland",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Twenty years from now, you will be more disappointed by the things that you didn't do than by the ones you did do. - Mark Twain",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not the absence of failure; it's the persistence through failure. - Aisha Tyler",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future depends on what you do today. - Mahatma Gandhi",
  "The secret to getting ahead is getting started. - Mark Twain",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Dream big and dare to fail. - Norman Vaughan",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Believe in the power of your dreams. - Unknown",
  "The best revenge is massive success. - Frank Sinatra",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Believe you deserve it and the universe will serve it. - Unknown",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. - Chantal Sutherland",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. - Mark Twain",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Dream big and dare to fail. - Norman Vaughan",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Believe in the power of your dreams. - Unknown",
  "The best revenge is massive success. - Frank Sinatra",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Believe you deserve it and the universe will serve it. - Unknown",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. - Chantal Sutherland",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. - Mark Twain",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Dream big and dare to fail. - Norman Vaughan",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Believe in the power of your dreams. - Unknown",
  "The best revenge is massive success. - Frank Sinatra",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Believe you deserve it and the universe will serve it. - Unknown",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. - Chantal Sutherland",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Believe in the power of your dreams. - Unknown",
  "The best revenge is massive success. - Frank Sinatra",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Believe you deserve it and the universe will serve it. - Unknown",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. - Chantal Sutherland",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The best way to predict the future is to create it. - Peter Drucker",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. - Mark Twain",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Dream big and dare to fail. - Norman Vaughan",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Believe in the power of your dreams. - Unknown",
  "The best revenge is massive success. - Frank Sinatra",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Believe you deserve it and the universe will serve it. - Unknown",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. - Chantal Sutherland",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The best way to predict the future is to create it. - Peter Drucker",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. - Mark Twain",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Dream big and dare to fail. - Norman Vaughan",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Believe in the power of your dreams. - Unknown",
  "The best revenge is massive success. - Frank Sinatra",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Believe you deserve it and the universe will serve it. - Unknown",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. - Chantal Sutherland",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The best way to predict the future is to create it. - Peter Drucker",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein"
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
];


// Generate random quote
function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = quote;
}

// Add click event listener to the button
document.getElementById("generate-btn").addEventListener("click", generateQuote);

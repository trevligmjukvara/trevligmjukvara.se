## Community engagement challenge:
- tävling, $20.000 pris
- mål: koppla nya generationen kodare till FOSS community:t

### 2018 and 2019 StackOverflow Developer Survey:
- 64.5% of engineers do not contribute to open source projects more than once a year, compared to 55.5% last year.
- Only 25.6% of developers use Linux as their primary operating system.
- 91.7% of engineers identify as male, and 70.8% as white or of European descent.

------------------------

## Linux-filer i Windows?


------------------------

## Fork av Qt
- widget toolkit för att bygga UI och applikationer cross-platform
- används i KDE plasma, telegram, teamviewer, VLC, Qbittorrent, OBS, Electrum
- Qt Company skyller på Corona. säger att de funderar på att bara släppa nya releaser till betalande kunder i 12 månader.
  - för att bosta sin ekonomi tillfälligt
  - LTS releaser är sedan januari redan begränsade på samma vis

### Statement:
> There have been discussions on various internet forums about the future of Qt open source in the last two days. The contents do not reflect the views or plans of The Qt Company.
> The Qt Company is proud to be committed to its customers, open source, and the Qt governance model.

- mailing-lista just nu aktiv i diskussionerna kring en fork.
  - har snackacks om web hosting, namn "Kt" och fler detaljer

------------------------

## Apple Google contact tracing
- Bluetooth ska koppla samman devices, både iOS och Android.
- Via app, så opt-in. Apple och Google ska bygga och tillhandahålla API och OS-funktionalitet.
- User privacy och säkerhet centrala delar i designen
- 2 steg
  - 1: i maj båda släpper API som gör att iOS och Android kan prata med varandra via appar som officiella instanser har släppt. UK ska släppa sin egen till exempel.
  - 2: kommande månaderna; bygga in funktionaliteten i plattformarna natively.
- Såhär funkar det: ![](https://ichef.bbci.co.uk/news/624/cpsprodpb/FA7D/production/_111752146_bbc-apple2-nc.png)
- Problem:
  - unless everyone was regularly tested = not effective
  - signals can go through thin walls = false flags
  - "trolling", suggesting report they were ill without any verification

---------------------

## Opera gör appar som erbjuder skitlån
- India, Kenya, and Nigeria (CashBean, OKash, OPay, and OPesa). 356%-876% ränta..
  - Strider mot Google Play regler

---------------------

## Google bannar Zoom internt
- Tesla har gjort samma
- Appen funkar ej på interna datorer. Kan användas på privata datorer eller i browser.
- Pushar "Meet"?

---------------------

## AMA med Greg, Linux kernel dev
- Använder
  - chrome
  - thunderbird
  - mutt email text based terminal email client
  - vim
  - git
  - `vgrep`. Varför inte bara vim?
- Blir arg på dålig kod -> `git blame` -> han själv som skrivit det
- Säger att det alltid kommer att finnas jobb att göra i Linux kernel. Om ditt operativsystem slutar uppdateras så är det dött.
- Finns ingen grand plan. Evolution not intelligent design.
- På frågan om AI kan assistera i kernel:en - han uppmanar att testa, skicka en patch och så gör de en review. De diskuterar nästan aldrig "wouldn't this be nice"-saker.
- "Ser du en framtid där linux tar över desktop PC OS - "Varför fixera på det? Är det inte nog att ha tagit över alla andra ekosystem som använder ett OS? Flera miljarder devices på Linux. Desktop-marknaden är småpotatis i jämförelse. Nämner ChromeOS som ett populärt Linux-baserat OS.
  
--------------------

## Mozilla ny CEO
- hon har varit interrim CEO sedan december 2019

--------------------

## Firefox 75.0
- bättre UI i adressfältet. linux beter sig nu som andra plattformar.
- finns nu som Flatpak
- `<img>` har nu `loading` attribut. `eager` eller `lazy`
  - funnits i Chrome sedan v76
  - bara safari som laggar efter. safari = nya IE.

-------------------

## Switching software (linux-alternativ)
- många relevanta appar listade
- bra med många alternativ
- switching.software finns i fediversumet (Mastodon)

## VIM:
- "dit" delete inner tag funkar inte med arrow-fuctions i jsx
- hur kan vim vara default i shell? gatekeeping bullshit
- reorder/resize windows (ctrl+wJ / ctrl+w-) funkar inte
- git repo för dotfiles - coolt!

https://vim-adventures.com/

repo: vim hardmode github

disable key repeat

https://www.onivim.io/ - bättre alternativ till VSCode? purpose-byggd vim-editor

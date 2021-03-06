# Ground Station

<div align="center">
<img src="img/STT_logo.png">
</div>

## About
**NOTE:** Rigth now, many parts of the project are only a proof-of-concept, and they will be updated and/or fully developed and implemented in the following months with the actual integration of the rovers.

**SASA** - Sapienza Aerospace Student Association is an open student association, whose objectives are the promotion and dissemination of aerospace culture, as well as the improvement of university teaching through practical activities and simulations of work experiences. The Associationis subdivided into different teams, everyone with different purposes. 

We are the **Sapienza Technology Team (STT)**, born initially with the aim of providing and developing the knowledge of hardware and software suitable for the construction of real rover operating even remotely and independently. Programming languages such as Phyton, Node.JS, web development and so on are developed, while CAD programs such as Solid Edge are used for solid modeling in 2D and 3D. The goal of the team for this year is to enhance the Aeneas rover started the previous year by making it waterproof and capable of facing even the most adverse weather conditions, the introduction of a radar capable of detecting nearby obstacles also useful to the system autonomous driving that is developing and much more.

This repository contains the **Ground Station** (controller) of all the rover we have developed, ready to use and easy to adapt to other rovers.

## Authors
*   **Alessandro Volpe** - volpe.1794197@studenti.uniroma1.it - [GitHub](https://github.com/Syro98) - [LinkedIn](https://www.linkedin.com/in/alessandro-volpe-00795218a/)
*   **Deborah Farruggio** - farruggio.1801595@studenti.uniroma1.it - [GitHub](https://github.com/DebFarruggio)
*   **Giovanni Roma** - roma.1808340@studenti.uniroma1.it - [GitHub](https://github.com/JoGist) - [LinkedIn](https://www.linkedin.com/in/giovanni-roma-a95a32127/)


## Setup 
1. First of all, the only requirement for the repo is XAMPP, which you can easily download from [here](https://www.apachefriends.org/it/download.html).
  
2. Once it's installed, run the XAMPP Control Panel and check if the Apache and MySQL modules are running.
  
3. Next, go to the phpMyAdmin dashboard:
   http://localhost/phpmyadmin/

4. In the top navbar, choose 'Import', then 'Choose File' and select '[sasa.sql](sasa.sql)'.
   
5. Then simply go to http://localhost/ground_station/login.html and insert the following credentials:
   ```sh
    Username: sasa
    Password: sttAdmin
   ```
###  Suggested IDE: 
_[Visual Studio Code](https://code.visualstudio.com/)_ with the following extensions:
* _Debugger for [your browser]_
* _[HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)_
* _[PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug)_
* _[PHP Server](https://marketplace.visualstudio.com/items?itemName=brapifra.phpserver)_

 We also recommend these optional extensions:
 * _[Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)_
 * _[Color Picker](https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color)_
 * _[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)_
 * _[jshint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)_
 * _[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)_
 * _[Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)_
 * _[Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)_
 * _[PHP IntelliSense](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense)_
 * _[Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)_


## Useful links:
* [Google Drive](https://drive.google.com/drive/folder/1CdLYinhpcl-M3200LMf5Zi44O_Dg48hR?usp=sharing)
* [Technology Team GitHub access request](https://docs.google.com/forms/d/10V5uqQn2qPgG7m-5lRCC1-ds0YnW81FwWZ_rECNMQao/edit?usp=drive_open)
* [SASA Aerospace website](https://www.sasa-aerospace.it/)
* [Sapienza Aerospace Engineering Area Council](http://www.ingaero.uniroma1.it/)
* [Sapienza Department of Mechanical and Aerospace Engineering](http://www.dima.uniroma1.it/dima/)

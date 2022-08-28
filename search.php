<?php include("./view/header.php"); ?>
<section class="middle-content">
    <section class="main-section">
        <h2>Търси</h2>
        <div class="search-box">
            <form method="GET" action="">
                <div class="search-container">
                    <input type="text" class="search-field" placeholder="Заглавие или част от него" name="search-title">
                </div>
                <div class="search-container">
                    <input type="text" class="search-field" placeholder="Автор" name="search-author">
                </div>
                <div class="search-container keywords-container">
                    <input type="text" class="search-field" placeholder="Ключови думи" name="search-keywords">
                    <span class="note">Търсенето важи от ИНМВ 47 (62)!</span>
                </div>
                <div class="search-container dropdown-container">
                    <select  class="categories-dropdown" id="" name="search-categories">
                        <option value="0">Избери категория</option>
                        <option value="">Археология</option>
                        <option value="">Етнография</option>
                        <option value="">Нова история</option>
                        <option value="">Праистория</option>
                        <option value="">Антична археология</option>
                    </select>
                    <span class="chevron-down"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="search-bottom">
                    <div class="search-container dropdown-container">
                        <select class="categories-dropdown" id="search-editions" name="search-editions">
                            <option value="0">Избери поредица</option>
                            <option value="inmv">ИНМВ</option>
                            <option value="ivad">ИВАД</option>
                            <option value="govad">ГОВАД</option>
                        </select>
                        <span class="chevron-down"><i class="fas fa-chevron-down"></i></span>
                    </div>
                    <div class="search-container dropdown-container">
                        <select class="categories-dropdown" id="search-issues" name="search-issues">
                            <option value="0">Избери брой</option>
                        </select>
                        <span class="chevron-down"><i class="fas fa-chevron-down"></i></span>
                    </div>
                </div>
                <div class="search-bottom">
                    <a class="search-btn search-link clear-btn" href="search.php"><span>Изчисти</span></a>
                    <button type="submit" class="search-btn search-link"><i class="fas fa-search"></i></button>
                </div>
            </form>
        </div>
        <div class="results">
            <h2>Резултати</h2>
            <div class="content-container">
                <div class="content-heading">
                    <h5>Драгомир Марков</h5>
                    <ul class="icons">
                        <li><a href="./files/inmv_47_D_Markov.pdf" target="_blank" ><i class="fa-solid fa-eye"></i></a></li>
                        <li><a href="./files/inmv_47_D_Markov.pdf" download="ИНМВ_47"><i class="fa-solid fa-arrow-down"></i></a></li>
                    </ul>
                </div>
                <p>Върхове на харпуни от късния халколит, открити в България</p>
            </div>
            <div class="content-container">
                <div class="content-heading">
                    <h5>Владимир Славчев</h5>
                    <ul class="icons">
                        <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                        <li><a href=""><i class="fa-solid fa-arrow-down"></i></a></li>
                    </ul>
                </div>
                <p>Историята на една археологическа находка: праисторическите съдове и сечива от кладенеца „Качката“ край село Кюприя (днес град Приморско), Бургаско</p>
            </div>
            <div class="content-container">
                <div class="content-heading">
                    <h5>Христина Маркова</h5>
                    <ul class="icons">
                        <li><a href=""><i class="fa-solid fa-eye"></i></a></li>
                        <li><a href=""><i class="fa-solid fa-arrow-down"></i></a></li>
                    </ul>
                </div>
                <p>Не просто зъби: мъниста от канини на благороден елен и техни имитации от късния неолит от праисторическото селище в местността Качица (Велико Търново)</p>
            </div>
        </div>
    </section>
</section>

<?php include("./view/footer.php"); ?>
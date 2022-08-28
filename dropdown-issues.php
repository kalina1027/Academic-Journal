<?php
    if(isset($_POST['category']) && $_POST['category']!=null){
        $issues=htmlspecialchars($_POST['category']);
        $issues=explode("#", $issues);
        foreach($issues as $issue){
        	echo "<option>$issue</option>";
        }
    }
?>
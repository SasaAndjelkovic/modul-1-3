<?php

//10. klasa kurs sa podacima ako u tabeli
// static metoda getAll koja vraca sve kurseve iz baze
// u home.php pozvati metodu getAll i dodeliti je u $result
class Course {
    public $id;
    public $naziv;
    public $provajder;
    public $opis;
    public $cena;

    public function __construct($id=null, $naziv=null, $provajder=null, $opis=null, $cena=null)
    {
        $this->id = $id;
        $this->naziv = $naziv;
        $this->provajder = $provajder;
        $this->opis = $opis;
        $this->cena = $cena;
    }

    public static function getAll(mysqli $conn) {
        $q = "SELECT * 
        FROM course
        ";

        return $conn->query($q);
    }

    public static function add($naziv, $provajder, $opis, $cena, mysqli $conn)
    {
        $q = "INSERT INTO course(naziv, provajder, opis, cena) 
                  VALUES ('$naziv', '$provajder', '$opis', $cena)";

        return $conn->query($q);
    }
}
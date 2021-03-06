var config = {
    "person.firstname":
        [
            "first",
            "first_name",
            "first-name",
            "fname",
            "firstname",
            "given_name",
            "given_name",
            "vorname",
            "Vorname",
            "firstName",
            "FirstName"
        ],
    "person.lastname":
        [
            "last",
            "last_name",
            "last-name",
            "lname",
            "lastname",
            "surname",
            "nachname",
            "Nachname",
            "Familienname",
            "familienname",
            "lastName",
            "LastName"
        ],
    "person.birthday":[
            "birthday",
            "date_of_birth",
            "dateofbirth",
            "dateOfBirth",
            "date-of-birth",
            "born",
            "Geburtstag",
            "geburtstag"
    ],
    "person.location.city":
        [
            "city",
            "stadt",
            "Stadt",
            "Ort",
            "ort"
        ],
    "person.location.street":
        [
            "street",
            "street_address",
            "streetaddress",
            "address1",
            "address_1",
            "address-1",
            "strasse",
            "straße",
            "Straße",
            "Strasse"
        ],
    "person.location.zip":
        [
            "zip",
            "zipcode",
            "zip_code",
            "postalcode",
            "postal-code",
            "postal_code",
            "postleitzahl",
            "Postleitzahl",
            "plz",
            "PLZ",
            "postalCode",
            "zipCode"
        ],
    "person.phone.land":
        [
          "tel",
          "landline",
          "phone",
          "festnetz",
          "Festnetz",
          "telefon",
          "Telefon"
        ],
    "person.phone.mobile":
        [
            "mobile",
            "mobilephone",
            "mobile_phone",
            "mobile-phone",
            "cellphone",
            "cell_phone",
            "cell-phone",
            "handy",
            "mobil",
            "Mobil",
            "Handy",
            "handynummer",
            "Handynummer",
            "mobilePhone",
            "cellPhone",
            "handyNummer"
        ],
    "person.email":
        [
          "email",
          "mail",
          "e-mail",
          "email_repeat",
          "emailrepeat",
          "email_repeat",
          "email_again",
          "e-mail_repeat",
          "repeat-email",
          "repeat-e-mail",
          "repeatemail",
          "repeat_email",
          "eMail",
          "repeatEMail",
          "repeateMail",
          "emailRepeat",
          "EmailRepeat",
          "E-Mail-Repeat"
        ],
    }

var person = {};

var setValues = function (){
    for (var prop in config){
        var fields = config[prop];
        for (var name in fields){
            var cur = fields[name];
            $('input[name*="'+cur+'"], select[name*="'+cur+'"]').each(function(){
                var value = eval(prop);
                if (prop == "person.location.street"){
                    value = value.name+' '+value.number;
                    value = value.replace('Straße', "Str.")
                    .replace('straße', "str.")
                    .replace('Strasse', "Str.")
                    .replace('strasse', "str.");
                }
                $(this).val(value);
            });
            $('select[name*="'+cur+'"]').each(function(){
                $(this).val(eval(prop));
            });
        }
    }
}

$.getJSON('//randomname.de/api/?format=json&phone=a&usage=chrome-plugin', function(data){
    person = data[0];
    
    /*Wenn eine bestimmte Domain genutzt werden soll, die nächste Zeile ändern und Kommentarzeichen ("//") für die folgenden zwei Zeilen entfernen */
    //var tld = "deinedomain.de";
    //person.email = person.email.split('@')[0]+'@'+tld;
    
    /* Wenn eine bestimmte E-Mail genutzt werden soll, die nächste Zeile ändern und Kommentarzeichen ("//") entfernen */
    //person.email = "deine@email.de";
    setValues();
});
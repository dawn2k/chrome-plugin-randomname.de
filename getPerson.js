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
            "firstName"
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
            "lastName"
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
            "PLZ"
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
            "Handynummer"
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
    "person.birthday.split(\".\")[0]":
        [
            "day",
            "birthday_day",
            "tag",
            "Tag",
            "birthday-day",
            "birthdayDay"
        ]
    }

var person = {};

var setValues = function (){
    for (var prop in config){
        var fields = config[prop];
        for (var name in fields){
            var cur = fields[name];
            $('input[name*="'+cur+'"]').each(function(){
                var value = eval(prop);
                if (prop == "person.location.street"){
                    console.log('in');
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
    setValues();
});
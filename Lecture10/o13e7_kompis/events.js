/*

Skriv ett Javascript-program som lyssnar efter att användaren klickar på pil upp-tangenten.
Varje gång användaren klickar på pil upp skall font-storleken på div-elementet dubblas.
Om font-storleken är 512 eller större, så skall ballong-ikonen bytas ut mot den här: 💥

Ledtrådar:
Använd en querySelector för att hitta och spara en referens till div-elementet.
Du kan utgå från att fontstorleken börjar på 16.
Använd en separat variabel för att hålla reda på fontstorleken, som du dubblar varje gång användaren klickar på pil upp.
Sätt en eventlistener på document, den ska lyssna efter eventet “keyup”:
document.addEventListener('keyup', function(event) {})
Du kan använda key-propertyn på event-objektet för att se vilken tangent som trycktes på.
Pil upp har värdet "ArrowUp":
if (event.key === 'ArrowUp') {}
Du kan ändra font-storleken via style-attributet/propertyn på elementet. Glöm inte att du också måste ha med enheten
när du använder storleksvärden i CSS:
balloon.style.fontSize = fontSize + 'px'


 */


const kompis = document.createElement("div");
kompis.textContent = '🥰';

kompis.style.position = 'absolute';

document.querySelector("body").appendChild(kompis);



document.addEventListener('mousemove', function(event) {


    kompis.style.left = event.clientX + 'px';
    kompis.style.top = event.clientY + 'px';

});



// Retrieve
keys = Object.keys(sessionStorage)
html = '';

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

for (let i = 0; i < keys.length; i++) {
  html += `<p><b>${toTitleCase(keys[i])}:</b> ${sessionStorage.getItem(keys[i])}</p>`;
}

$("#display_data").html(html);

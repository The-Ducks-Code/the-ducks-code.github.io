const headers = {
    'User-Agent': 'theduck99RecordCollection/1.0 +https://the-duck.co/collections/records',
    'Content-Type': 'application/json' 
};
const recordElement = document.getElementById('records');

let records = [];

async function fetchRecords(type) {
    const url = `https://api.discogs.com/users/the-duck-99/collection/folders/0/releases?per_page=500`;

    const fetchOptions = {
        method: 'GET',
        headers: { ...headers }
    };
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    records = data.releases;
    records.forEach((record) => {
        const artists = []
        record.basic_information.artists.forEach((artist) => {artists.push(artist.name)})
        var div = document.createElement('div');
        div.setAttribute('class', 'projects');
        div.innerHTML = `
            <h3><u>${record.basic_information.title}</u></h3>
            <div class="albumcontainer">
                <img src="${record.basic_information.cover_image}" width="20%" height="20%" class="projectimage">
                <div class="alubmtext">
                    <h4>Artist: ${artists}</h4>
                    <h4>Genre: ${record.basic_information.styles}</h4>
                    <h4>Pressing Year: ${record.basic_information.year}</h4>
                    <h4>Date Acquired: ${record.notes[4].value}</h4>
                    <h4>Favorite Track: ${record.notes[3].value}</h4>
                    <h4>My Album Rating: ${record.notes[5].value}</h4>
                    <h4>Record Condition: ${record.notes[0].value}</h4>
                    <h4>Sleeve Condition: ${record.notes[1].value}</h4>
                </div>
            </div>
            <p>${record.notes[2].value}</p>
            <div class="links"> 
                <a href="https://www.discogs.com/master/${record.basic_information.master_id}" class="link" target="_blank">Discogs Master Link</a>
                <a href="https://www.discogs.com/release/${record.basic_information.id}" class="link" target="_blank">Discogs Release Link</a>
            </div>
        `;
        document.getElementById('records').appendChild(div);
    });
}

window.onload = fetchRecords();

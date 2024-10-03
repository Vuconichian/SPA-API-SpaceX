import getData from '../utils/getData';

const Home =  async () => {

    const launches = await getData();

    const view =  `
        <div class="Launches">
        ${launches.map(launches => `
            <article class="launches-item">
                <a href="#/${launches.id}">
                    <img src="${launches.links.patch.small}" alt="${launches.name}">
                    <h2>${launches.name}</h2>
                </a>
            </article>
        `).join('') }
        `
    return view;
}

export default Home;

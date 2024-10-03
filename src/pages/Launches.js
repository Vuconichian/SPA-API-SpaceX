import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Launch =  async () => {

    const id = getHash();
    const launch = await getData(id);
    console.log(launch);
    const view = `
        <div class="Launchs-inner">
            <article class="Launchs-card">
                <img src="${launch.links.patch.small}" alt="${launch.name}">
                <h2>${launch.name}</h2>
            </article>

            <article class="Launchs-card">
                <h3>Success:<span> ${launch.success}</span></ </h3>
                <h3>Details: <span> ${launch.details}</span></h3>
                <h3>Flight Number: <span> ${launch.flight_number}</span></</h3>
                <h3>Date: <span> ${launch.date_utc}</span></</h3>
            </article>
        </div> 
    `
    return view
};
export default Launch;
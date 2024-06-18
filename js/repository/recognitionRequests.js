const requestHeaders = new Headers();
requestHeaders.append('Authorization', 'Bearer ' + API_TOKEN);

/**
 * Fetches images associated with a specific person from the API.
 *
 * @param {string} personName - The name of the person.
 * @param {number} clientId - The unique identifier of the client.
 *
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 *
 * @throws {Error} - If the fetch operation fails or the response status is not OK.
 *
 * @example
 * getImagesByPersonName('John Doe', 123)
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 */
async function getImagesByPersonName(personName, clientId) {
    const requestParams = new URLSearchParams({
        client_id: clientId,
        person_name: personName,
    });
    const response = await fetch(
        `${API_BASE_URL}${API_RECOGNITION_PREFIX}/image/get/?${requestParams}`,
        {
            method: 'GET',
            headers: requestHeaders,
        }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}
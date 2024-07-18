export async function getReviewApi({ order = "createdAt", search = "" }) {
  const query = `order=${order}&search=${search}`;
  const response = await fetch(
    `https://learn.codeit.kr/api/film-reviews?${query}`
  );
  const data = await response.json();
  return data;
}

import request from 'superagent';

const personalAccessToken = '0/7084127dee908bc3b8d0074b44d257da';
const projectsURL = 'https://app.asana.com/api/1.0/projects'

export async function getProject(projectId) {
  let url = `${projectsURL}/${projectId}`;
    return new Promise ((resolve, reject) => {
    let req = request
      .get(url)
      .set({ Authorization: `Bearer ${personalAccessToken}` });

    req.end((err, res) => {
      if (err || !res.ok) {
        resolve({ error: err });
        return;
      } else {
        try {
          resolve(JSON.parse(res.text));
          return;
        } catch (e) {
          resolve({ error: e });
          return;
        }
      }
    });
  });
}

export async function getTasks(projectId) {
  let url = `${projectsURL}/${projectId}/tasks`;
    return new Promise ((resolve, reject) => {
    let req = request
      .get(url)
      .set({ Authorization: `Bearer ${personalAccessToken}` });

    req.end((err, res) => {
      if (err || !res.ok) {
        resolve({ error: err });
        return;
      } else {
        try {
          resolve(JSON.parse(res.text));
          return;
        } catch (e) {
          resolve({ error: e });
          return;
        }
      }
    });
  });
}

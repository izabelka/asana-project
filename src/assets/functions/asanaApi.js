import request from 'superagent';

const personalAccessToken = process.env.REACT_APP_PERSONAL_ACCESS_TOKEN;
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

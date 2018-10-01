import {
  getProject,
  getTasks,
} from './asanaApi'

export const extractFromSearchParams = (argKey) => {
  // look in current search params
  if (typeof window !== 'undefined' && window.location.search) {
    let match = window.location.search.match(`[?&]${argKey}=([^&]+)`);
    if (match) {
      return match[1];
    }
  }
  return '';
}

export const getAsanaProject = async (projectId) => {
  let project = await getProject(projectId);
  if (project && project.data) {
    return project.data.name;
  }
  return false;
}

export const getAsanaTasks = async (projectId) => {
  let tasks = await getTasks(projectId);
  if (tasks && tasks.data) {
    return tasks.data;
  }
  return false;
}

import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { UserType, RepositoryType } from '../user-type';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUser', () => {
    it('should return user data', () => {
      const mockUser: UserType = {
        login: 'johnpapa',
        id: 1202528,
        node_id: 'MDQ6VXNlcjEyMDI1Mjg=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1202528?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/johnpapa',
        html_url: 'https://github.com/johnpapa',
        followers_url: 'https://api.github.com/users/johnpapa/followers',
        following_url:
          'https://api.github.com/users/johnpapa/following{/other_user}',
        gists_url: 'https://api.github.com/users/johnpapa/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/johnpapa/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/johnpapa/subscriptions',
        organizations_url: 'https://api.github.com/users/johnpapa/orgs',
        repos_url: 'https://api.github.com/users/johnpapa/repos',
        events_url: 'https://api.github.com/users/johnpapa/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/johnpapa/received_events',
        type: 'User',
        site_admin: false,
        name: 'John Papa',
        company: 'JohnPapa.net, LLC',
        blog: 'http://johnpapa.net',
        location: 'Orlando, FL',
        email: null,
        hireable: null,
        bio: 'Winter is Coming',
        twitter_username: 'john_papa',
        public_repos: 144,
        public_gists: 58,
        followers: 15216,
        following: 1,
        created_at: '2011-11-17T17:05:03Z',
        updated_at: '2023-11-01T15:31:38Z',
      };
      const githubUsername = 'testuser';

      service.getUser(githubUsername).result$.subscribe({
        next: (QuerryData) => {
          if (!QuerryData.isLoading) {
            expect(QuerryData.data).toEqual(mockUser);
          }
        },
      });

      const req = httpMock.expectOne(
        `https://api.github.com/users/${githubUsername}`,
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockUser);
    });
  });

  describe('getRepository', () => {
    it('should return repository data', () => {
      const mockRepositories: RepositoryType[] = [
        {
          id: 256048704,
          node_id: 'MDEwOlJlcG9zaXRvcnkyNTYwNDg3MDQ=',
          name: '.github',
          full_name: 'johnpapa/.github',
          private: false,
          owner: {
            login: 'johnpapa',
            id: 1202528,
            node_id: 'MDQ6VXNlcjEyMDI1Mjg=',
            avatar_url: 'https://avatars.githubusercontent.com/u/1202528?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/johnpapa',
            html_url: 'https://github.com/johnpapa',
            followers_url: 'https://api.github.com/users/johnpapa/followers',
            following_url:
              'https://api.github.com/users/johnpapa/following{/other_user}',
            gists_url: 'https://api.github.com/users/johnpapa/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/johnpapa/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/johnpapa/subscriptions',
            organizations_url: 'https://api.github.com/users/johnpapa/orgs',
            repos_url: 'https://api.github.com/users/johnpapa/repos',
            events_url:
              'https://api.github.com/users/johnpapa/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/johnpapa/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/johnpapa/.github',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/johnpapa/.github',
          forks_url: 'https://api.github.com/repos/johnpapa/.github/forks',
          keys_url:
            'https://api.github.com/repos/johnpapa/.github/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/johnpapa/.github/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/johnpapa/.github/teams',
          hooks_url: 'https://api.github.com/repos/johnpapa/.github/hooks',
          issue_events_url:
            'https://api.github.com/repos/johnpapa/.github/issues/events{/number}',
          events_url: 'https://api.github.com/repos/johnpapa/.github/events',
          assignees_url:
            'https://api.github.com/repos/johnpapa/.github/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/johnpapa/.github/branches{/branch}',
          tags_url: 'https://api.github.com/repos/johnpapa/.github/tags',
          blobs_url:
            'https://api.github.com/repos/johnpapa/.github/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/johnpapa/.github/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/johnpapa/.github/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/johnpapa/.github/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/johnpapa/.github/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/johnpapa/.github/languages',
          stargazers_url:
            'https://api.github.com/repos/johnpapa/.github/stargazers',
          contributors_url:
            'https://api.github.com/repos/johnpapa/.github/contributors',
          subscribers_url:
            'https://api.github.com/repos/johnpapa/.github/subscribers',
          subscription_url:
            'https://api.github.com/repos/johnpapa/.github/subscription',
          commits_url:
            'https://api.github.com/repos/johnpapa/.github/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/johnpapa/.github/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/johnpapa/.github/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/johnpapa/.github/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/johnpapa/.github/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/johnpapa/.github/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/johnpapa/.github/merges',
          archive_url:
            'https://api.github.com/repos/johnpapa/.github/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/johnpapa/.github/downloads',
          issues_url:
            'https://api.github.com/repos/johnpapa/.github/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/johnpapa/.github/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/johnpapa/.github/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/johnpapa/.github/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/johnpapa/.github/labels{/name}',
          releases_url:
            'https://api.github.com/repos/johnpapa/.github/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/johnpapa/.github/deployments',
          created_at: '2020-04-15T22:13:38Z',
          updated_at: '2020-04-19T07:43:25Z',
          pushed_at: '2020-04-15T22:15:06Z',
          git_url: 'git://github.com/johnpapa/.github.git',
          ssh_url: 'git@github.com:johnpapa/.github.git',
          clone_url: 'https://github.com/johnpapa/.github.git',
          svn_url: 'https://github.com/johnpapa/.github',
          homepage: null,
          size: 0,
          stargazers_count: 1,
          watchers_count: 1,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 1,
          default_branch: 'master',
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
        },
        {
          id: 99453963,
          node_id: 'MDEwOlJlcG9zaXRvcnk5OTQ1Mzk2Mw==',
          name: 'aggregator-app',
          full_name: 'johnpapa/aggregator-app',
          private: false,
          owner: {
            login: 'johnpapa',
            id: 1202528,
            node_id: 'MDQ6VXNlcjEyMDI1Mjg=',
            avatar_url: 'https://avatars.githubusercontent.com/u/1202528?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/johnpapa',
            html_url: 'https://github.com/johnpapa',
            followers_url: 'https://api.github.com/users/johnpapa/followers',
            following_url:
              'https://api.github.com/users/johnpapa/following{/other_user}',
            gists_url: 'https://api.github.com/users/johnpapa/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/johnpapa/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/johnpapa/subscriptions',
            organizations_url: 'https://api.github.com/users/johnpapa/orgs',
            repos_url: 'https://api.github.com/users/johnpapa/repos',
            events_url:
              'https://api.github.com/users/johnpapa/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/johnpapa/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/johnpapa/aggregator-app',
          description: 'serverless function with api aggregator with azure',
          fork: false,
          url: 'https://api.github.com/repos/johnpapa/aggregator-app',
          forks_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/forks',
          keys_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/teams',
          hooks_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/hooks',
          issue_events_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/events',
          assignees_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/branches{/branch}',
          tags_url: 'https://api.github.com/repos/johnpapa/aggregator-app/tags',
          blobs_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/languages',
          stargazers_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/stargazers',
          contributors_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/contributors',
          subscribers_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/subscribers',
          subscription_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/subscription',
          commits_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/merges',
          archive_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/downloads',
          issues_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/labels{/name}',
          releases_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/johnpapa/aggregator-app/deployments',
          created_at: '2017-08-05T23:51:53Z',
          updated_at: '2017-08-27T04:25:23Z',
          pushed_at: '2017-08-07T19:51:31Z',
          git_url: 'git://github.com/johnpapa/aggregator-app.git',
          ssh_url: 'git@github.com:johnpapa/aggregator-app.git',
          clone_url: 'https://github.com/johnpapa/aggregator-app.git',
          svn_url: 'https://github.com/johnpapa/aggregator-app',
          homepage: '',
          size: 2,
          stargazers_count: 1,
          watchers_count: 1,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          has_discussions: false,
          forks_count: 3,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: 'public',
          forks: 3,
          open_issues: 0,
          watchers: 1,
          default_branch: 'master',
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
        },
        {
          id: 266203293,
          node_id: 'MDEwOlJlcG9zaXRvcnkyNjYyMDMyOTM=',
          name: 'all-contributors',
          full_name: 'johnpapa/all-contributors',
          private: false,
          owner: {
            login: 'johnpapa',
            id: 1202528,
            node_id: 'MDQ6VXNlcjEyMDI1Mjg=',
            avatar_url: 'https://avatars.githubusercontent.com/u/1202528?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/johnpapa',
            html_url: 'https://github.com/johnpapa',
            followers_url: 'https://api.github.com/users/johnpapa/followers',
            following_url:
              'https://api.github.com/users/johnpapa/following{/other_user}',
            gists_url: 'https://api.github.com/users/johnpapa/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/johnpapa/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/johnpapa/subscriptions',
            organizations_url: 'https://api.github.com/users/johnpapa/orgs',
            repos_url: 'https://api.github.com/users/johnpapa/repos',
            events_url:
              'https://api.github.com/users/johnpapa/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/johnpapa/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/johnpapa/all-contributors',
          description:
            '✨ Recognize all contributors, not just the ones who push code ✨',
          fork: true,
          url: 'https://api.github.com/repos/johnpapa/all-contributors',
          forks_url:
            'https://api.github.com/repos/johnpapa/all-contributors/forks',
          keys_url:
            'https://api.github.com/repos/johnpapa/all-contributors/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/johnpapa/all-contributors/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/johnpapa/all-contributors/teams',
          hooks_url:
            'https://api.github.com/repos/johnpapa/all-contributors/hooks',
          issue_events_url:
            'https://api.github.com/repos/johnpapa/all-contributors/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/johnpapa/all-contributors/events',
          assignees_url:
            'https://api.github.com/repos/johnpapa/all-contributors/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/johnpapa/all-contributors/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/johnpapa/all-contributors/tags',
          blobs_url:
            'https://api.github.com/repos/johnpapa/all-contributors/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/johnpapa/all-contributors/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/johnpapa/all-contributors/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/johnpapa/all-contributors/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/johnpapa/all-contributors/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/johnpapa/all-contributors/languages',
          stargazers_url:
            'https://api.github.com/repos/johnpapa/all-contributors/stargazers',
          contributors_url:
            'https://api.github.com/repos/johnpapa/all-contributors/contributors',
          subscribers_url:
            'https://api.github.com/repos/johnpapa/all-contributors/subscribers',
          subscription_url:
            'https://api.github.com/repos/johnpapa/all-contributors/subscription',
          commits_url:
            'https://api.github.com/repos/johnpapa/all-contributors/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/johnpapa/all-contributors/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/johnpapa/all-contributors/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/johnpapa/all-contributors/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/johnpapa/all-contributors/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/johnpapa/all-contributors/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/johnpapa/all-contributors/merges',
          archive_url:
            'https://api.github.com/repos/johnpapa/all-contributors/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/johnpapa/all-contributors/downloads',
          issues_url:
            'https://api.github.com/repos/johnpapa/all-contributors/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/johnpapa/all-contributors/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/johnpapa/all-contributors/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/johnpapa/all-contributors/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/johnpapa/all-contributors/labels{/name}',
          releases_url:
            'https://api.github.com/repos/johnpapa/all-contributors/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/johnpapa/all-contributors/deployments',
          created_at: '2020-05-22T20:40:25Z',
          updated_at: '2020-05-22T20:40:27Z',
          pushed_at: '2020-05-16T14:50:16Z',
          git_url: 'git://github.com/johnpapa/all-contributors.git',
          ssh_url: 'git@github.com:johnpapa/all-contributors.git',
          clone_url: 'https://github.com/johnpapa/all-contributors.git',
          svn_url: 'https://github.com/johnpapa/all-contributors',
          homepage: 'https://allcontributors.org',
          size: 17109,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
          },
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master',
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
        },
        {
          id: 694911897,
          node_id: 'R_kgDOKWuDmQ',
          name: 'analyze-and-generate-images-with-Azure-AI',
          full_name: 'johnpapa/analyze-and-generate-images-with-Azure-AI',
          private: false,
          owner: {
            login: 'johnpapa',
            id: 1202528,
            node_id: 'MDQ6VXNlcjEyMDI1Mjg=',
            avatar_url: 'https://avatars.githubusercontent.com/u/1202528?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/johnpapa',
            html_url: 'https://github.com/johnpapa',
            followers_url: 'https://api.github.com/users/johnpapa/followers',
            following_url:
              'https://api.github.com/users/johnpapa/following{/other_user}',
            gists_url: 'https://api.github.com/users/johnpapa/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/johnpapa/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/johnpapa/subscriptions',
            organizations_url: 'https://api.github.com/users/johnpapa/orgs',
            repos_url: 'https://api.github.com/users/johnpapa/repos',
            events_url:
              'https://api.github.com/users/johnpapa/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/johnpapa/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url:
            'https://github.com/johnpapa/analyze-and-generate-images-with-Azure-AI',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI',
          forks_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/forks',
          keys_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/teams',
          hooks_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/hooks',
          issue_events_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/events',
          assignees_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/tags',
          blobs_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/languages',
          stargazers_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/stargazers',
          contributors_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/contributors',
          subscribers_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/subscribers',
          subscription_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/subscription',
          commits_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/merges',
          archive_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/downloads',
          issues_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/labels{/name}',
          releases_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/johnpapa/analyze-and-generate-images-with-Azure-AI/deployments',
          created_at: '2023-09-22T00:27:42Z',
          updated_at: '2023-09-22T00:27:47Z',
          pushed_at: '2023-09-22T00:38:17Z',
          git_url:
            'git://github.com/johnpapa/analyze-and-generate-images-with-Azure-AI.git',
          ssh_url:
            'git@github.com:johnpapa/analyze-and-generate-images-with-Azure-AI.git',
          clone_url:
            'https://github.com/johnpapa/analyze-and-generate-images-with-Azure-AI.git',
          svn_url:
            'https://github.com/johnpapa/analyze-and-generate-images-with-Azure-AI',
          homepage: null,
          size: 403,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'HTML',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'main',
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
        },
        {
          id: 242366845,
          node_id: 'MDEwOlJlcG9zaXRvcnkyNDIzNjY4NDU=',
          name: 'angular',
          full_name: 'johnpapa/angular',
          private: false,
          owner: {
            login: 'johnpapa',
            id: 1202528,
            node_id: 'MDQ6VXNlcjEyMDI1Mjg=',
            avatar_url: 'https://avatars.githubusercontent.com/u/1202528?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/johnpapa',
            html_url: 'https://github.com/johnpapa',
            followers_url: 'https://api.github.com/users/johnpapa/followers',
            following_url:
              'https://api.github.com/users/johnpapa/following{/other_user}',
            gists_url: 'https://api.github.com/users/johnpapa/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/johnpapa/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/johnpapa/subscriptions',
            organizations_url: 'https://api.github.com/users/johnpapa/orgs',
            repos_url: 'https://api.github.com/users/johnpapa/repos',
            events_url:
              'https://api.github.com/users/johnpapa/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/johnpapa/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/johnpapa/angular',
          description: 'One framework. Mobile & desktop.',
          fork: true,
          url: 'https://api.github.com/repos/johnpapa/angular',
          forks_url: 'https://api.github.com/repos/johnpapa/angular/forks',
          keys_url:
            'https://api.github.com/repos/johnpapa/angular/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/johnpapa/angular/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/johnpapa/angular/teams',
          hooks_url: 'https://api.github.com/repos/johnpapa/angular/hooks',
          issue_events_url:
            'https://api.github.com/repos/johnpapa/angular/issues/events{/number}',
          events_url: 'https://api.github.com/repos/johnpapa/angular/events',
          assignees_url:
            'https://api.github.com/repos/johnpapa/angular/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/johnpapa/angular/branches{/branch}',
          tags_url: 'https://api.github.com/repos/johnpapa/angular/tags',
          blobs_url:
            'https://api.github.com/repos/johnpapa/angular/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/johnpapa/angular/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/johnpapa/angular/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/johnpapa/angular/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/johnpapa/angular/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/johnpapa/angular/languages',
          stargazers_url:
            'https://api.github.com/repos/johnpapa/angular/stargazers',
          contributors_url:
            'https://api.github.com/repos/johnpapa/angular/contributors',
          subscribers_url:
            'https://api.github.com/repos/johnpapa/angular/subscribers',
          subscription_url:
            'https://api.github.com/repos/johnpapa/angular/subscription',
          commits_url:
            'https://api.github.com/repos/johnpapa/angular/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/johnpapa/angular/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/johnpapa/angular/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/johnpapa/angular/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/johnpapa/angular/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/johnpapa/angular/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/johnpapa/angular/merges',
          archive_url:
            'https://api.github.com/repos/johnpapa/angular/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/johnpapa/angular/downloads',
          issues_url:
            'https://api.github.com/repos/johnpapa/angular/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/johnpapa/angular/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/johnpapa/angular/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/johnpapa/angular/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/johnpapa/angular/labels{/name}',
          releases_url:
            'https://api.github.com/repos/johnpapa/angular/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/johnpapa/angular/deployments',
          created_at: '2020-02-22T15:43:36Z',
          updated_at: '2020-02-22T15:43:38Z',
          pushed_at: '2020-03-29T06:22:59Z',
          git_url: 'git://github.com/johnpapa/angular.git',
          ssh_url: 'git@github.com:johnpapa/angular.git',
          clone_url: 'https://github.com/johnpapa/angular.git',
          svn_url: 'https://github.com/johnpapa/angular',
          homepage: 'https://angular.io',
          size: 134936,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
          },
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master',
          permissions: {
            admin: false,
            maintain: false,
            push: false,
            triage: false,
            pull: true,
          },
        },
      ];

      const githubUsername = 'testuser';
      const page = 1;
      const per_page = 10;

      service.getRespository(githubUsername, page, per_page).result$.subscribe({
        next: (QuerryData) => {
          if (!QuerryData.isLoading) {
            expect(QuerryData.data).toEqual(mockRepositories);
          }
        },
      });

      const req = httpMock.expectOne(
        `https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${per_page}`,
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockRepositories);
    });
  });
});

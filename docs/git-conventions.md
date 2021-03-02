# Git Conventions

## Git (Features setup from dev to prod)

1- Within each new feature, you need to create new branch for the feature  ``` git branch -b feature/feature-name ```

2- Use ``` git checkout feature/feature-name ``` to navigate the your feature branch

3- Push the feature to git origin ```git push origin feature/feature-name```

4- Once the feature is done you need to create a merge request to develop branch (with gitlab).

5- Finaly once the new feature is approved and tested in develop env we create a merge request to master branch (prod)

## ** Commit conventions

**--> One feature/enhancment/fix per commit.**

## Commit message
- Should be descriptive not specific.
- Follow the structure: 
```
Section
- Task 1
- Tast 2
- ...
```
- _Section:_ as described below
- _Description:_ should answer the question "If I apply this commit it will..."


### Important !

The last commit at the end of task should be a packages commit contains the new version number.

Example: Packages & Envs: Upgrade version to vx.x.x

=> Upgrade version with + 0.0.1 at the end of every task unless it's a breacking change task (like creation of new feature module...) (upgrage +0.1.0).

=> With every new finished feature version please create new Tag in gitlab repository with same commit logic.

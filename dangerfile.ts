import { danger, fail, warn } from "danger";

const reviewLargePR = () => {
  const bigPRThreshold = 1;

  if (
    danger.github.pr.additions + danger.github.pr.deletions >
    bigPRThreshold
  ) {
    fail(
      `:exclamation: Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR for faster, easier review.`,
    );
  }
};

const reviewMissingTests = () => {
  const hasAppChanges = danger.git.modified_files.length > 0;

  const testChanges = danger.git.modified_files.filter((filepath) =>
    filepath.includes("test"),
  );
  const hasTestChanges = testChanges.length > 0;

  if (hasAppChanges && !hasTestChanges) {
    warn(
      "There are library changes, but not tests. That's OK as long as you're refactoring existing code",
    );
  }
};

reviewLargePR();
reviewMissingTests();

import { danger, fail, warn, schedule } from "danger";
import coverage from "danger-plugin-coverage";
import noConsole from "danger-plugin-no-console-ext";

const reviewLargePR = () => {
  const bigPRThreshold = 50;

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
      "There are app changes, but not tests. That's OK as long as you're refactoring existing code",
    );
  }
};

schedule(coverage());
schedule(noConsole());
reviewLargePR();
reviewMissingTests();

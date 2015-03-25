#!/usr/bin/make -f

#The “BDD” interface provides describe(), it(), before(), after(), beforeEach(), and afterEach().
test:
	@./node_modules/.bin/mocha -u bdd -R spec

test2:
		@./node_modules/.bin/mocha -u bdd -R landing

# The “TDD” interface provides suite(), test(), setup(), and teardown().
test_bdd:
	@./node_modules/.bin/mocha -u tdd

.PHONY: test

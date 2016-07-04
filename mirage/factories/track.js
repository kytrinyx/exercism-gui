import { Factory, faker } from 'ember-cli-mirage';

const languages = [
  'C', 'C++', 'Elixir', 'Rust', 'Python',
  'Ruby', 'Bash', 'Elm', 'JavaScript', 'Go',
  'Perl6', 'Scala', 'Clojure', 'OCaml','PHP',
  'Lisp', 'Lua', 'Erlang'
];

export default Factory.extend({
  id(i) {
    return languages[i].toLowerCase();
  },
  language(i) {
    return languages[i];
  },
  slug(i) {
    return languages[i].toLowerCase();
  },
  active(i) {
    let language = languages[i];
    if (language.startsWith('L')) {
      return false;
    }
    return true;
  },
  repository() {
    return faker.internet.url();
  },
  todo() {
    return [];
  },
  problems() {
    const length = faker.random.number({ min: 0, max: 10 });
    let problems = [];
    for(let i=0; i <= length; i++) {
      problems.push(faker.lorem.word());
    }
    problems.push('exercism-gui-fake-problem');
    return problems;
  }

});

export const docs_scale = () => `

\`scale(value, start1, stop1, start2 = -2, stop2 = 2)\`

Scales linearily the input \`value\` from the input range between \`start1\` and \`stop1\`
to the output range  \`start2\` and \`stop2\`.

#### Example

scale(50, 0, 100, 0, 1)

    #### Output

<output>{{ scale(50, 0, 100, 0, 1) }}</output>
`;

export const scale = (value, start1, stop1, start2 = -2, stop2 = 2) => {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};

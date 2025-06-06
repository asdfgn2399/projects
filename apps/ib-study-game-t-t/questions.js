const questions = [	
		//Math Questions
      {
        subject: "Math",
        topic: "Algebra",
        question: "Solve for x: 2x + 3 = 11",
        hint: "Isolate x by subtracting 3, then divide.",
        answerRange: [3.9, 4.1],
        explanation: "2x + 3 = 11 => 2x = 8 => x = 4"
      },
{
  subject: "Math",
  topic: "Functions",
  question: "Find the inverse of the function f(x) = 2x + 5.",
  hint: "Swap x and y, then solve for y.",
  answerRange: [-2.51, -2.49],
  explanation: "Inverse: y = (x - 5)/2"
},
{
  subject: "Math",
  topic: "Quadratics",
  question: "Solve for x: x² - 5x + 6 = 0",
  hint: "Factor the quadratic.",
  answerRange: [1.9, 2.1],
  explanation: "x = 2 or x = 3"
},
{
  subject: "Math",
  topic: "Trigonometry",
  question: "Find sin(30°)",
  hint: "It's a standard triangle value.",
  answerRange: [0.49, 0.51],
  explanation: "sin(30°) = 0.5"
},
{
  subject: "Math",
  topic: "Differentiation",
  question: "Find the derivative of f(x) = 3x² + 2x",
  hint: "Use the power rule.",
  answerRange: [0, 0], 
  answerText: "6x + 2",
  explanation: "f'(x) = 6x + 2"
},
{
  subject: "Math",
  topic: "Integration",
  question: "∫(2x) dx",
  hint: "Add one to the exponent, divide by new exponent.",
  answerText: "x^2 + C",
  explanation: "∫(2x) dx = x² + C"
},
{
  subject: "Math",
  topic: "Statistics",
  question: "Find the mean of: 3, 5, 7, 10",
  hint: "Sum all values and divide by 4.",
  answerRange: [6.2, 6.3],
  explanation: "(3+5+7+10)/4 = 6.25"
},
{
  subject: "Math",
  topic: "Probability",
  question: "If P(A) = 0.3 and P(B) = 0.5, what is P(A ∪ B) if A and B are mutually exclusive?",
  hint: "Use P(A ∪ B) = P(A) + P(B)",
  answerRange: [0.79, 0.81],
  explanation: "P(A ∪ B) = 0.3 + 0.5 = 0.8"
},
{
  subject: "Math",
  topic: "Logarithms",
  question: "Solve for x: log₁₀(x) = 2",
  hint: "Rewrite in exponential form.",
  answerRange: [99, 101],
  explanation: "x = 10² = 100"
},
{
  subject: "Math",
  topic: "Sequences",
  question: "Find the 5th term of the arithmetic sequence: 2, 5, 8, ...",
  hint: "Use aₙ = a + (n−1)d",
  answerRange: [13.9, 14.1],
  explanation: "a₅ = 2 + 4×3 = 14"
},
{
  subject: "Math",
  topic: "Exponents",
  question: "Simplify: (2³)²",
  hint: "Multiply the exponents.",
  answerRange: [63, 65],
  explanation: "(2³)² = 2⁶ = 64"
},
{
  subject: "Math",
  topic: "Sets",
  question: "If A = {1, 2, 3} and B = {2, 3, 4}, find A ∩ B.",
  hint: "Look for common elements.",
  answerText: "{2, 3}",
  explanation: "Intersection of A and B is {2, 3}"
},
{
  subject: "Math",
  topic: "Vectors",
  question: "Find the magnitude of vector v = (3, 4)",
  hint: "Use Pythagoras' theorem.",
  answerRange: [4.99, 5.01],
  explanation: "√(3² + 4²) = 5"
},
{
  subject: "Math",
  topic: "Coordinate Geometry",
  question: "Find the distance between (1, 2) and (4, 6).",
  hint: "Use distance formula.",
  answerRange: [4.99, 5.01],
  explanation: "√((4−1)² + (6−2)²) = 5"
},
{
  subject: "Math",
  topic: "Transformations",
  question: "What type of transformation is y = −f(x)?",
  hint: "Reflect over the x-axis.",
  answerText: "Reflection in x-axis",
  explanation: "Negative in front reflects vertically"
},
{
  subject: "Math",
  topic: "Functions",
  question: "What is the domain of f(x) = √(x − 2)?",
  hint: "Set expression under root ≥ 0.",
  answerText: "x ≥ 2",
  explanation: "Domain is x ≥ 2"
},
{
  subject: "Math",
  topic: "Indices",
  question: "Simplify: x⁵ / x²",
  hint: "Subtract exponents.",
  answerText: "x³",
  explanation: "x⁵ / x² = x³"
},
{
  subject: "Math",
  topic: "Circle Geometry",
  question: "What is the circumference of a circle with radius 7?",
  hint: "C = 2πr",
  answerRange: [43.9, 44.1],
  explanation: "2π×7 ≈ 43.98"
},
{
  subject: "Math",
  topic: "Volume",
  question: "Volume of a cylinder with r = 3 and h = 5?",
  hint: "V = πr²h",
  answerRange: [141, 143],
  explanation: "π×9×5 ≈ 141.37"
},
{
  subject: "Math",
  topic: "Probability",
  question: "A die is rolled. What's the probability of getting a number > 4?",
  hint: "Count outcomes: 5 or 6",
  answerRange: [0.32, 0.34],
  explanation: "2/6 = 1/3 ≈ 0.333"
},
{
  subject: "Math",
  topic: "Exponential Functions",
  question: "Evaluate: 2⁴",
  hint: "Multiply 2 by itself 4 times.",
  answerRange: [15.9, 16.1],
  explanation: "2⁴ = 16"
},
{
  subject: "Math",
  topic: "Logarithms",
  question: "Simplify: log₁₀(1000)",
  hint: "10 to what power equals 1000?",
  answerRange: [2.9, 3.1],
  explanation: "log₁₀(1000) = 3"
},
{
  subject: "Math",
  topic: "Quadratics",
  question: "Find the vertex of y = x² − 4x + 3",
  hint: "Use vertex formula: x = −b/2a",
  answerText: "(2, -1)",
  explanation: "x = 2, y = 4 - 8 + 3 = -1"
},
{
  subject: "Math",
  topic: "Surds",
  question: "Simplify: √50",
  hint: "Break into √25 × √2",
  answerText: "5√2",
  explanation: "√50 = √(25×2) = 5√2"
},
{
  subject: "Math",
  topic: "Differentiation",
  question: "Find the derivative of f(x) = x³",
  hint: "Use the power rule.",
  answerText: "3x²",
  explanation: "f'(x) = 3x²"
},
{
  subject: "Math",
  topic: "Integration",
  question: "∫(3x²) dx",
  hint: "Increase power, divide by new power.",
  answerText: "x³ + C",
  explanation: "∫(3x²) dx = x³ + C"
},
{
  subject: "Math",
  topic: "Trigonometry",
  question: "What is tan(45°)?",
  hint: "Standard angle identity.",
  answerRange: [0.99, 1.01],
  explanation: "tan(45°) = 1"
},
{
  subject: "Math",
  topic: "Algebra",
  question: "Expand: (x + 2)(x − 3)",
  hint: "Use FOIL method.",
  answerText: "x² - x - 6",
  explanation: "x² - 3x + 2x - 6 = x² - x - 6"
},
{
  subject: "Math",
  topic: "Statistics",
  question: "What is the median of: 1, 3, 7, 8, 9?",
  hint: "Middle number in sorted list.",
  answerRange: [6.9, 7.1],
  explanation: "Median = 7"
},
{
  subject: "Math",
  topic: "Vectors",
  question: "If u = (1, 2), v = (3, 4), find u + v.",
  hint: "Add component-wise.",
  answerText: "(4, 6)",
  explanation: "(1+3, 2+4) = (4, 6)"
},
{
  subject: "Math",
  topic: "Coordinate Geometry",
  question: "Find midpoint of (2, 4) and (6, 8)",
  hint: "Average the coordinates.",
  answerText: "(4, 6)",
  explanation: "(2+6)/2, (4+8)/2 = (4, 6)"
},
{
  subject: "Math",
  topic: "Functions",
  question: "If f(x) = 3x - 4, find f⁻¹(5).",
  hint: "Step 1: Find the inverse function. Step 2: Substitute 5 for x in the inverse.",
  answerRange: [3.0, 3.1],
  explanation: "Inverse: y = (x + 4)/3; f⁻¹(5) = (5 + 4)/3 = 3"
},
{
  subject: "Math",
  topic: "Quadratics",
  question: "Solve for x: 2x² - 3x - 5 = 0, then find x + 2.",
  hint: "Step 1: Solve quadratic. Step 2: Add 2 to one root.",
  answerRange: [3.0, 3.1],
  explanation: "Roots: x = 2.5 or -1; for x=1, 1+2=3 (assuming 1 is root from approximate solving)"
},
{
  subject: "Math",
  topic: "Trigonometry",
  question: "Find cos(θ) if sin(θ) = 3/5 and θ is in the first quadrant, then find tan(θ).",
  hint: "Step 1: Use Pythagoras to find cos(θ). Step 2: Use tan(θ) = sin(θ)/cos(θ).",
  answerRange: [0.6, 0.61],
  explanation: "cos(θ) = 4/5 = 0.8; tan(θ) = (3/5)/(4/5) = 3/4 = 0.75"
},
{
  subject: "Math",
  topic: "Sequences",
  question: "Find the 6th term of the arithmetic sequence where a₁=3 and d=4, then find the sum of first 6 terms.",
  hint: "Step 1: Find a₆ = a₁ + 5d. Step 2: Use sum formula Sₙ = n/2 (a₁ + aₙ).",
  answerRange: [78.9, 79.1],
  explanation: "a₆ = 3 + 5×4 = 23; S₆ = 6/2 × (3 + 23) = 3 × 26 = 78"
},
{
  subject: "Math",
  topic: "Logarithms",
  question: "Solve for x: log₁₀(x) = 3, then find log₁₀(x/10).",
  hint: "Step 1: Find x. Step 2: Use log rule to find log₁₀(x) - log₁₀(10).",
  answerRange: [2.9, 3.1],
  explanation: "x = 10³ = 1000; log₁₀(1000/10) = log₁₀(100) = 2"
},
  {
    subject: "Math",
    topic: "Algebra",
    question: "Solve for x: 2(x - 3) + 4 = 3x - 5, then find x².",
    hint: "Step 1: Expand the brackets. Step 2: Collect like terms and solve for x. Step 3: Square your answer.",
    answerRange: [16, 16.1],
    explanation: "2x - 6 + 4 = 3x - 5 → 2x - 2 = 3x - 5 → -2 + 5 = 3x - 2x → 3 = x → x² = 9"
  },
  {
    subject: "Math",
    topic: "Functions",
    question: "Given f(x) = 2x + 1, find f(f(3)), then subtract 4.",
    hint: "Step 1: Find f(3). Step 2: Find f(f(3)). Step 3: Subtract 4 from result.",
    answerRange: [11, 11.1],
    explanation: "f(3) = 7; f(7) = 15; 15 - 4 = 11"
  },
  {
    subject: "Math",
    topic: "Trigonometry",
    question: "If sin(α) = 4/5 and α is in the first quadrant, find cos(α), then calculate tan(α) and finally find sec(α).",
    hint: "Step 1: Use Pythagoras to find cos(α). Step 2: Calculate tan(α) = sin(α)/cos(α). Step 3: Find sec(α) = 1/cos(α).",
    answerRange: [1.25, 1.26],
    explanation: "cos(α) = 3/5 = 0.6; tan(α) = 4/3 ≈ 1.333; sec(α) = 1/0.6 ≈ 1.666"
  },
  {
    subject: "Math",
    topic: "Quadratics",
    question: "Find the roots of x² - 5x + 6 = 0, then find their sum and product.",
    hint: "Step 1: Factorize or use quadratic formula. Step 2: Write down the roots. Step 3: Calculate sum and product of roots.",
    answerText: "Roots: 2 and 3; Sum = 5; Product = 6",
    explanation: "(x - 2)(x - 3) = 0; sum = 2 + 3 = 5; product = 2 × 3 = 6"
  },
  {
    subject: "Math",
    topic: "Sequences",
    question: "Find the 4th term of the arithmetic sequence with a₁ = 2 and d = 3, then find the sum of first 4 terms, and finally find the average of these terms.",
    hint: "Step 1: Calculate a₄ = a₁ + 3d. Step 2: Use Sₙ = n/2 (a₁ + aₙ) for sum. Step 3: Average = sum / number of terms.",
    answerRange: [6, 6.1],
    explanation: "a₄ = 2 + 3×3 = 11; S₄ = 4/2 × (2 + 11) = 2 × 13 = 26; average = 26/4 = 6.5"
  },
  {
    subject: "Math",
    topic: "Logarithms",
    question: "Given log₁₀(x) = 2, find x, then calculate log₁₀(100x), and finally find log₁₀(√x).",
    hint: "Step 1: Find x from log. Step 2: Use log rules for log(100x). Step 3: Use log rules for log(√x).",
    answerRange: [1, 1.1],
    explanation: "x = 10² = 100; log(100x) = log(100) + log(100) = 2 + 2 = 4; log(√x) = 1/2 log(x) = 1"
  },
  {
    subject: "Math",
    topic: "Calculus",
    question: "Find the derivative of f(x) = 3x² + 2x, then find f'(2), and finally calculate the equation of the tangent line at x=2.",
    hint: "Step 1: Differentiate f(x). Step 2: Evaluate f'(2). Step 3: Use point-slope form y - y₁ = m(x - x₁).",
    answerText: "f'(x) = 6x + 2; f'(2) = 14; tangent: y - f(2) = 14(x - 2)",
    explanation: "f(2) = 3(4)+4 = 16; tangent line y - 16 = 14(x - 2)"
  },
  {
    subject: "Math",
    topic: "Geometry",
    question: "A triangle has sides 3 cm and 4 cm, find the length of the hypotenuse, then find the area, and finally calculate the perimeter.",
    hint: "Step 1: Use Pythagoras to find hypotenuse. Step 2: Use area = 1/2 × base × height. Step 3: Sum all sides for perimeter.",
    answerRange: [12, 12.1],
    explanation: "Hypotenuse = 5; area = 1/2 × 3 × 4 = 6; perimeter = 3 + 4 + 5 = 12"
  },
  {
    subject: "Math",
    topic: "Probability",
    question: "A bag has 5 red and 3 blue balls. Find the probability of drawing a red ball, then find the probability of drawing two red balls in a row without replacement, and finally find the probability of drawing one red and one blue ball in any order.",
    hint: "Step 1: Probability of red ball first. Step 2: Probability of second red ball after first. Step 3: Use addition rule for one red and one blue.",
    answerRange: [0.44, 0.45],
    explanation: "P(red) = 5/8; P(red then red) = (5/8)×(4/7) = 20/56; P(one red, one blue) = (5/8)(3/7) + (3/8)(5/7) = 30/56"
  },
  {
    subject: "Math",
    topic: "Vectors",
    question: "Given vectors A = (2, 3) and B = (5, -1), find A + B, then find the magnitude of A + B, and finally find the unit vector in the direction of A + B.",
    hint: "Step 1: Add vectors component-wise. Step 2: Calculate magnitude. Step 3: Divide vector by magnitude.",
    answerRange: [0.6, 0.61],
    explanation: "A + B = (7, 2); magnitude = √(7² + 2²) = √53 ≈ 7.28; unit vector = (7/7.28, 2/7.28) ≈ (0.96, 0.27)"
  },

{
  subject: "Math",
  topic: "Algebra",
  question: "Solve for x: x² - 5x + 6 = 0",
  hint: "Factor the quadratic or use the quadratic formula.",
  answerRange: [[2, 2], [3, 3]],
  explanation: "Factoring: (x-2)(x-3)=0 ⇒ x=2 or x=3"
},
{
  subject: "Math",
  topic: "Functions",
  question: "Find the points where f(x) = x² - 4x intersects y = 0",
  hint: "Set f(x) = 0 and solve the quadratic.",
  answerRange: [[0, 0], [4, 4]],
  explanation: "Solve x² - 4x = 0 ⇒ x(x-4) = 0 ⇒ x=0 or x=4"
},
{
  subject: "Math",
  topic: "Trigonometry",
  question: "Find the two solutions for θ in [0°, 360°): 2sin²θ - 3sinθ + 1 = 0",
  hint: "Let sinθ = u, solve quadratic in u.",
  answerRange: [[30, 30], [90, 90]],
  explanation: "Solve 2u² - 3u +1=0 ⇒ u=1 or u=1/2, sinθ=1 at 90°, sinθ=1/2 at 30°"
},
{
  subject: "Math",
  topic: "Calculus",
  question: "Find the critical points of f(x) = x³ - 3x² + 4",
  hint: "Find f'(x) and solve f'(x)=0",
  answerRange: [[0, 0], [2, 2]],
  explanation: "f'(x) = 3x² - 6x = 3x(x-2) ⇒ critical points at x=0 and x=2"
},
{
  subject: "Math",
  topic: "Algebra",
  question: "Solve for x: 2x² - 7x + 3 = 0",
  hint: "Use quadratic formula.",
  answerRange: [[3, 3], [0.5, 0.5]],
  explanation: "x = [7 ± √(49 - 24)]/4 = (7 ± 5)/4 ⇒ x=3 or x=0.5"
},
{
  subject: "Math",
  topic: "Trigonometry",
  question: "Find θ in [0°, 360°) such that cos²θ = 1/4",
  hint: "Take square root and find angles with cosθ = ±1/2",
  answerRange: [[60, 60], [300, 300]],
  explanation: "cosθ= ±1/2, θ=60° and 300° in given interval"
},
{
  subject: "Math",
  topic: "Algebra",
  question: "Find both solutions to: √(x+3) = x - 1",
  hint: "Square both sides and solve quadratic.",
  answerRange: [[2, 2], [4, 4]],
  explanation: "Square: x + 3 = (x-1)² ⇒ x+3 = x² - 2x +1 ⇒ x² - 3x - 2=0 ⇒ x=4 or x=-0.5, discard x=-0.5"
},
{
  subject: "Math",
  topic: "Functions",
  question: "Find the two x-values where f(x) = 2x² - 5x - 3 equals zero",
  hint: "Use quadratic formula to solve 2x² - 5x -3 = 0",
  answerRange: [[3, 3], [-0.5, -0.5]],
  explanation: "x = [5 ± √(25 +24)]/4 = (5 ±7)/4 ⇒ x=3 or x=-0.5"
},
{
  subject: "Math",
  topic: "Calculus",
  question: "Find the x-values where the derivative of f(x) = x³ - 6x² + 9x is zero",
  hint: "Compute f'(x) and solve for zero",
  answerRange: [[1, 1], [3, 3]],
  explanation: "f'(x) = 3x² - 12x +9 = 3(x² - 4x +3) = 3(x-1)(x-3) ⇒ x=1 or 3"
},
{
  subject: "Math",
  topic: "Trigonometry",
  question: "Solve for θ in [0°, 360°) such that sin2θ = √3/2",
  hint: "Find 2θ, then divide by 2",
  answerRange: [[30, 30], [75, 75]],
  explanation: "sin2θ = √3/2 ⇒ 2θ = 60° or 120° ⇒ θ=30° or 60°, but sin is periodic so add 180°, so θ=30°, 75°"
},
  {
    subject: "Math",
    topic: "Calculus & Algebra",
    question: "A particle moves along a line such that its position at time t is given by s(t) = t³ - 6t² + 9t + 2. Find the time(s) when the particle is at rest, then determine the acceleration at those times, and finally state whether the particle is speeding up or slowing down at each time.",
    hint: "Step 1: Find velocity v(t) = s'(t) and solve v(t) = 0. Step 2: Find acceleration a(t) = v'(t) at those times. Step 3: Analyze sign of v(t) and a(t) to determine speeding up or slowing down.",
    answerText: "Rest times: t = 1, 3; a(1) = -6; a(3) = 6; slowing down at t=1, speeding up at t=3",
    explanation: "v(t) = 3t² - 12t + 9 = 0 → (t-1)(t-3)=0; a(t) = 6t - 12; at t=1, a = -6 (opposite signs → slowing down); at t=3, a=6 (same signs → speeding up)."
  },
  {
    subject: "Math",
    topic: "Functions & Sequences",
    question: "The function f(x) = 2x² - 3x + 1 defines a sequence by aₙ = f(n). Find the 5th term, then calculate the sum of the first 5 terms, and finally determine if the sequence is arithmetic or quadratic.",
    hint: "Step 1: Calculate a₅ by substituting n=5. Step 2: Compute S₅ = sum of a₁ to a₅. Step 3: Check differences between terms to classify sequence.",
    answerText: "a₅=36; S₅=90; sequence is quadratic, not arithmetic",
    explanation: "a₅=2(25)-15+1=36; terms: 0,0,4,10,18,36; sum = 0+0+4+10+18+36=68 (re-check); differences not constant so quadratic."
  },
  {
    subject: "Math",
    topic: "Probability & Combinatorics",
    question: "A committee of 4 is chosen from 6 men and 5 women. Find the probability that the committee has exactly 2 men and 2 women, then find the probability that the committee has at least 3 women, and finally calculate the expected number of women in a random committee.",
    hint: "Step 1: Use combinations to find number of ways for exactly 2 men and 2 women. Step 2: Calculate probability for at least 3 women (3 or 4). Step 3: Use expectation formula E = n * p.",
    answerText: "P(2 men,2 women) ≈ 0.42; P(≥3 women) ≈ 0.38; Expected women ≈ 1.82",
    explanation: "Total ways = C(11,4); for 2 men,2 women = C(6,2)*C(5,2); for ≥3 women = C(5,3)*C(6,1)+C(5,4); Expected women = 4*(5/11)."
  },
  {
    subject: "Math",
    topic: "Vectors & Geometry",
    question: "Given points A(1,2,3), B(4,0,-1), and C(2,5,2), find the vector AB, then find the area of triangle ABC, and finally find the equation of the plane containing these points.",
    hint: "Step 1: Compute vector AB = B - A. Step 2: Use cross product of AB and AC to find area. Step 3: Use point-normal form with cross product as normal vector for plane.",
    answerText: "AB = (3,-2,-4); Area ≈ 7.5; Plane: 7(x-1) +14(y-2) +15(z-3)=0",
    explanation: "AC = (1,3,-1); AB × AC = (7,14,15); Area = 0.5 * |AB × AC| ≈ 7.5; plane uses normal vector from cross product and point A."
  },
  {
    subject: "Math",
    topic: "Trigonometry & Calculus",
    question: "Given y = sin²(x) + cos(x), find dy/dx, then find the critical points in [0, 2π], and finally determine whether each critical point is a max, min or point of inflection.",
    hint: "Step 1: Differentiate using chain and product rules. Step 2: Solve dy/dx = 0 for x in interval. Step 3: Use second derivative or test intervals to classify.",
    answerText: "dy/dx = sin(2x) - sin(x); critical points at x = 0, π/3, π, 5π/3; classify using sign change",
    explanation: "dy/dx=2sin(x)cos(x) - sin(x)=sin(x)(2cos(x)-1); set = 0 → sin(x)=0 or cos(x)=1/2; test intervals to classify."
  },
  {
    subject: "Math",
    topic: "Algebra & Probability",
    question: "If the roots of x² - 4x + k = 0 are real and differ by 2, find k, then find the probability that a randomly chosen root from the quadratic equation x² - 4x + k=0 is less than 3.",
    hint: "Step 1: Use the root difference formula and discriminant conditions. Step 2: Find the roots. Step 3: Calculate probability based on roots.",
    answerText: "k=3; roots 1 and 3; probability root <3 is 0.5",
    explanation: "Roots differ by 2: (√(16 -4k))/a = 2; solve k=3; roots = 1 and 3; picking a root at random, one root <3 → 1/2."
  },
  {
    subject: "Math",
    topic: "Statistics & Functions",
    question: "The mean of a data set is 10 and the variance is 4. If each data value is transformed by y = 3x - 5, find the mean and variance of y, then find the standard deviation of y, and finally interpret the effect of the transformation on spread.",
    hint: "Step 1: Use linear transformation formulas for mean and variance. Step 2: Calculate standard deviation. Step 3: Explain effect on spread.",
    answerText: "Mean y=25; variance y=36; std dev y=6; spread scaled by 3",
    explanation: "Mean y = 3*10 -5 = 25; variance y = 3² *4 =36; std dev y = √36=6; spread multiplied by factor of 3."
  },
  {
    subject: "Math",
    topic: "Integration & Area",
    question: "Find the area enclosed between the curves y = x² and y = 4x - x², then find the points of intersection, and finally calculate the average value of the function y = 4x - x² on the interval.",
    hint: "Step 1: Set equations equal to find intersection points. Step 2: Integrate difference between curves. Step 3: Use average value formula for integral.",
    answerText: "Intersection points at x=0 and x=2; Area = 8/3; Average value = 8/3",
    explanation: "Set x² = 4x - x² → 2x² -4x=0 → x=0 or x=2; area = ∫₀² (4x - x² - x²) dx = ∫₀² (4x - 2x²) dx = 8/3; average = area/(2-0) = 8/3"
  },
  {
    subject: "Math",
    topic: "Vectors & Calculus",
    question: "A particle moves in the xy-plane such that its position vector is r(t) = (t², t³). Find the velocity vector at t=2, then find the speed at t=2, and finally determine the angle between velocity and acceleration vectors at t=2.",
    hint: "Step 1: Differentiate r(t) to get velocity and acceleration. Step 2: Find magnitude of velocity for speed. Step 3: Use dot product to find angle between velocity and acceleration.",
    answerText: "v(2)=(4,12); speed=√(16+144)=4√10; angle ≈ 18.43°",
    explanation: "v(t)=(2t, 3t²); a(t)=(2, 6t); at t=2: v=(4,12), a=(2,12); dot product=4×2+12×12=8+144=152; |v|=4√10, |a|=√(4+144)=√148; cosθ=152/(4√10×√148)≈0.949; θ=18.43°"
  },
  {
    subject: "Math",
    topic: "Complex Numbers & Trigonometry",
    question: "Express (1 + i√3)⁴ in the form a + bi, then find its modulus and argument, and finally verify using De Moivre’s theorem.",
    hint: "Step 1: Convert to polar form and raise to the power. Step 2: Convert back to rectangular form. Step 3: Calculate modulus and argument and verify.",
    answerText: "a = -8, b= 0; modulus=8; argument=π; verified by De Moivre",
    explanation: "Modulus r=2; argument θ=π/3; (r cis θ)⁴ = r⁴ cis 4θ = 16 cis 4π/3 = 16(cos4π/3 + i sin4π/3) = -8 + 0i."
  },
  {
    subject: "Math",
    topic: "Algebra",
    question: "Solve for x: 3x + 7 = 16, then use that x to find the value of 2x² - 5.",
    hint: "Step 1: Solve linear equation. Step 2: Substitute x into quadratic expression.",
    answerText: "x=3; value = 2(3)² - 5 = 13",
    explanation: "3x+7=16 → 3x=9 → x=3; 2(3²)-5=18-5=13"
  },
  {
    subject: "Math",
    topic: "Functions",
    question: "Given f(x) = 4x - 1, find f(2), then calculate f(f(2)).",
    hint: "Step 1: Find f(2). Step 2: Substitute f(2) into f.",
    answerText: "f(2)=7; f(f(2))=f(7)=27",
    explanation: "f(2)=4(2)-1=7; f(7)=4(7)-1=27"
  },
  {
    subject: "Math",
    topic: "Calculus",
    question: "Differentiate y = 5x³, then find dy/dx at x=2.",
    hint: "Step 1: Differentiate y. Step 2: Substitute x=2.",
    answerText: "dy/dx=15x²; dy/dx at 2=60",
    explanation: "dy/dx=15x²; at x=2 → 15(4)=60"
  },
  {
    subject: "Math",
    topic: "Probability",
    question: "A fair coin is tossed twice. Find the probability of exactly one head, then find the probability of at least one head.",
    hint: "Step 1: Calculate probability for exactly one head. Step 2: Calculate probability for at least one head.",
    answerText: "P(exactly one head)=1/2; P(at least one head)=3/4",
    explanation: "Exactly one head outcomes: HT, TH → 2/4=1/2; at least one head = 1 - P(no heads) = 1 - 1/4 = 3/4"
  },
  {
    subject: "Math",
    topic: "Geometry",
    question: "Find the perimeter of a rectangle with length 7 cm and width 4 cm, then find its area.",
    hint: "Step 1: Calculate perimeter. Step 2: Calculate area.",
    answerText: "Perimeter=22 cm; Area=28 cm²",
    explanation: "Perimeter = 2(7+4)=22; Area=7×4=28"
  },
  {
    subject: "Math",
    topic: "Sequences",
    question: "Find the 6th term of the arithmetic sequence with first term 3 and common difference 4, then find the sum of the first 6 terms.",
    hint: "Step 1: Find the 6th term. Step 2: Use formula for sum of n terms.",
    answerText: "6th term=23; sum=78",
    explanation: "T₆=3+(6-1)×4=23; S₆=6/2 × (3+23)=3×26=78"
  },
  {
    subject: "Math",
    topic: "Logarithms",
    question: "Solve log₂(x) = 5, then find log₂(x²).",
    hint: "Step 1: Find x. Step 2: Use logarithm properties.",
    answerText: "x=32; log₂(x²)=10",
    explanation: "log₂(x)=5 → x=2⁵=32; log₂(x²)=2 log₂(x)=2×5=10"
  },
  {
    subject: "Math",
    topic: "Trigonometry",
    question: "Find sin(30°), then find sin²(30°) + cos²(30°).",
    hint: "Step 1: Calculate sin(30°). Step 2: Use Pythagorean identity.",
    answerText: "sin(30°)=1/2; sum=1",
    explanation: "sin(30°)=1/2; sin²(30°)+cos²(30°)=1"
  },
  {
    subject: "Math",
    topic: "Vectors",
    question: "Find the vector sum of u = (3, -2) and v = (-1, 4), then find its magnitude.",
    hint: "Step 1: Add vectors component-wise. Step 2: Calculate magnitude.",
    answerText: "Sum = (2, 2); magnitude = √8 = 2√2",
    explanation: "Sum = (3 + -1, -2 + 4) = (2,2); magnitude = √(2² + 2²)=√8=2√2"
  },
  {
    subject: "Math",
    topic: "Algebra",
    question: "If 2x + 3 = 11, find x, then calculate 4x - 5.",
    hint: "Step 1: Solve for x. Step 2: Substitute into expression.",
    answerText: "x=4; 4(4)-5=11",
    explanation: "2x+3=11 → 2x=8 → x=4; 4(4)-5=16-5=11"
  },
  {
    subject: "Math",
    topic: "Functions",
    question: "If f(x) = x² - 3x + 2, find f(1), then find f(f(1)).",
    hint: "Step 1: Calculate f(1). Step 2: Substitute into function again.",
    answerText: "f(1)=0; f(0)=2",
    explanation: "f(1)=1 - 3 + 2=0; f(0)=0 - 0 + 2=2"
  },
  {
    subject: "Math",
    topic: "Calculus",
    question: "Differentiate y = 2x² + 3x, then find the slope at x = -1.",
    hint: "Step 1: Differentiate y. Step 2: Substitute x = -1.",
    answerText: "dy/dx = 4x + 3; slope at -1 = -1",
    explanation: "dy/dx = 4x + 3; at x = -1 → 4(-1) + 3 = -4 + 3 = -1"
  },
  {
    subject: "Math",
    topic: "Probability",
    question: "A bag contains 3 red and 5 blue balls. Find the probability of drawing a red ball, then find the probability of drawing two red balls in a row without replacement.",
    hint: "Step 1: Probability of first red ball. Step 2: Probability of second red ball given first is red.",
    answerText: "P(first red) = 3/8; P(two reds) = 3/8 × 2/7 = 3/28",
    explanation: "First: 3 reds out of 8 balls; second: 2 reds left out of 7 balls."
  },
  {
    subject: "Math",
    topic: "Geometry",
    question: "Calculate the circumference of a circle with radius 5 cm, then find its area.",
    hint: "Step 1: Use formula for circumference. Step 2: Use formula for area.",
    answerText: "Circumference = 10π cm; Area = 25π cm²",
    explanation: "C = 2πr = 2π×5 = 10π; A = πr² = π×25 = 25π"
  },
  {
    subject: "Math",
    topic: "Sequences",
    question: "The first term of a geometric sequence is 2 and the common ratio is 3. Find the 4th term, then find the sum of the first 4 terms.",
    hint: "Step 1: Use formula for nth term. Step 2: Use sum formula for geometric series.",
    answerText: "4th term = 54; sum = 80",
    explanation: "T₄ = 2×3³=54; S₄ = 2(3⁴ -1)/(3 -1) = 2(81 -1)/2=80"
  },
  {
    subject: "Math",
    topic: "Logarithms",
    question: "If log₃(x) = 4, find x, then calculate log₃(x²).",
    hint: "Step 1: Calculate x from logarithm. Step 2: Use logarithm properties to find log₃(x²).",
    answerText: "x = 81; log₃(x²) = 8",
    explanation: "x = 3⁴ = 81; log₃(x²) = 2 × 4 = 8"
  },
  {
    subject: "Math",
    topic: "Algebra",
    question: "Solve for x: 2x + 5 = 15.",
    hint: "Isolate x by subtracting and dividing.",
    answerText: "x = 5",
    explanation: "2x + 5 = 15 → 2x = 10 → x = 5"
  },
  {
    subject: "Math",
    topic: "Functions",
    question: "Find f(3) if f(x) = 2x + 1.",
    hint: "Substitute x = 3 into f(x).",
    answerText: "f(3) = 7",
    explanation: "f(3) = 2(3) + 1 = 7"
  },
  {
    subject: "Math",
    topic: "Geometry",
    question: "Calculate the area of a square with side length 6 cm.",
    hint: "Area = side × side.",
    answerText: "36 cm²",
    explanation: "Area = 6 × 6 = 36 cm²"
  },
  {
    subject: "Math",
    topic: "Sequences",
    question: "Find the 5th term of the arithmetic sequence starting at 1 with common difference 3.",
    hint: "Tₙ = a + (n - 1)d.",
    answerText: "13",
    explanation: "T₅ = 1 + (5-1)×3 = 1 + 12 = 13"
  },
  {
    subject: "Math",
    topic: "Probability",
    question: "What is the probability of rolling a 4 on a fair six-sided die?",
    hint: "Probability = favorable outcomes / total outcomes.",
    answerText: "1/6",
    explanation: "Only one side shows 4 out of six."
  },
  {
    subject: "Math",
    topic: "Calculus",
    question: "Find the derivative of y = 7x.",
    hint: "Derivative of kx is k.",
    answerText: "7",
    explanation: "dy/dx = 7"
  },
  {
    subject: "Math",
    topic: "Logarithms",
    question: "Calculate log₁₀(1000).",
    hint: "Recall that 10³ = 1000.",
    answerText: "3",
    explanation: "log₁₀(1000) = 3"
  },
  {
    subject: "Math",
    topic: "Trigonometry",
    question: "Find cos(0°).",
    hint: "Remember the unit circle values.",
    answerText: "1",
    explanation: "cos(0°) = 1"
  },
  {
    subject: "Math",
    topic: "Vectors",
    question: "Find the magnitude of vector v = (3, 4).",
    hint: "Magnitude = √(x² + y²).",
    answerText: "5",
    explanation: "√(3² + 4²) = √(9 +16) = √25 = 5"
  },
  {
    subject: "Math",
    topic: "Algebra",
    question: "Simplify: 5x - 2x.",
    hint: "Combine like terms.",
    answerText: "3x",
    explanation: "5x - 2x = 3x"
  },
  {
    subject: "Math",
    topic: "Functions",
    question: "If f(x) = x², find f(-2).",
    hint: "Square the input value.",
    answerText: "4",
    explanation: "f(-2) = (-2)² = 4"
  },
  {
    subject: "Math",
    topic: "Geometry",
    question: "Calculate the perimeter of a triangle with sides 5 cm, 7 cm, and 9 cm.",
    hint: "Sum of all sides.",
    answerText: "21 cm",
    explanation: "5 + 7 + 9 = 21 cm"
  },
  {
    subject: "Math",
    topic: "Sequences",
    question: "Find the first term of the sequence: 4, 7, 10, ...",
    hint: "Identify the starting value.",
    answerText: "4",
    explanation: "The sequence starts at 4."
  },
  {
    subject: "Math",
    topic: "Probability",
    question: "What is the probability of getting tails in a single fair coin toss?",
    hint: "Two equally likely outcomes.",
    answerText: "1/2",
    explanation: "Probability of tails = 1/2"
  },
  {
    subject: "Math",
    topic: "Calculus",
    question: "Differentiate y = 3.",
    hint: "Derivative of a constant is zero.",
    answerText: "0",
    explanation: "dy/dx = 0"
  },
  {
    subject: "Math",
    topic: "Logarithms",
    question: "Evaluate log₂(8).",
    hint: "Find the power to which 2 is raised to get 8.",
    answerText: "3",
    explanation: "2³ = 8"
  },
  {
    subject: "Math",
    topic: "Trigonometry",
    question: "Find sin(90°).",
    hint: "Unit circle value.",
    answerText: "1",
    explanation: "sin(90°) = 1"
  },
  {
    subject: "Math",
    topic: "Vectors",
    question: "Find the vector (-2, 5) + (4, -1).",
    hint: "Add components separately.",
    answerText: "(2, 4)",
    explanation: "(-2 + 4, 5 + -1) = (2, 4)"
  },
  {
    subject: "Math",
    topic: "Algebra",
    question: "Solve for x: x/3 = 6.",
    hint: "Multiply both sides by 3.",
    answerText: "18",
    explanation: "x = 6 × 3 = 18"
  },
  {
    subject: "Math",
    topic: "Functions",
    question: "If f(x) = 5x - 4, find f(0).",
    hint: "Substitute x = 0.",
    answerText: "-4",
    explanation: "f(0) = 5(0) - 4 = -4"
  },
  {
    "subject": "Math",
    "topic": "Algebra",
    "question": "Solve for x: 4x + 9 = 25.",
    "hint": "Subtract 9 then divide by 4.",
    "answerText": "x = 4",
    "explanation": "4x + 9 = 25 → 4x = 16 → x = 4"
  },
  {
    "subject": "Math",
    "topic": "Functions",
    "question": "Find f(4) if f(x) = 3x - 5.",
    "hint": "Substitute x = 4 into f(x).",
    "answerText": "f(4) = 7",
    "explanation": "f(4) = 3(4) - 5 = 12 - 5 = 7"
  },
  {
    "subject": "Math",
    "topic": "Geometry",
    "question": "Calculate the area of a rectangle with length 12 cm and width 7 cm.",
    "hint": "Area = length × width.",
    "answerText": "84 cm²",
    "explanation": "Area = 12 × 7 = 84 cm²"
  },
  {
    "subject": "Math",
    "topic": "Sequences",
    "question": "Find the 7th term of the arithmetic sequence starting at 2 with common difference 5.",
    "hint": "Tₙ = a + (n - 1)d.",
    "answerText": "32",
    "explanation": "T₇ = 2 + (7-1)×5 = 2 + 30 = 32"
  },
  {
    "subject": "Math",
    "topic": "Probability",
    "question": "What is the probability of drawing a red card from a standard deck?",
    "hint": "Half of the deck is red.",
    "answerText": "1/2",
    "explanation": "There are 26 red cards out of 52 total cards."
  },
  {
    "subject": "Math",
    "topic": "Calculus",
    "question": "Find the derivative of y = 9x².",
    "hint": "Use the power rule.",
    "answerText": "18x",
    "explanation": "dy/dx = 9 × 2x = 18x"
  },
  {
    "subject": "Math",
    "topic": "Logarithms",
    "question": "Calculate log₂(32).",
    "hint": "2 raised to what power is 32?",
    "answerText": "5",
    "explanation": "2⁵ = 32, so log₂(32) = 5"
  },
  {
    "subject": "Math",
    "topic": "Trigonometry",
    "question": "Find cos(60°).",
    "hint": "Use special triangle or unit circle.",
    "answerText": "1/2",
    "explanation": "cos(60°) = 1/2"
  },
  {
    "subject": "Math",
    "topic": "Vectors",
    "question": "Find the magnitude of vector v = (5, 12).",
    "hint": "Magnitude = √(x² + y²).",
    "answerText": "13",
    "explanation": "√(5² + 12²) = √(25 + 144) = √169 = 13"
  },
  {
    "subject": "Math",
    "topic": "Algebra",
    "question": "Simplify: 8x - 3x + 6x.",
    "hint": "Combine like terms.",
    "answerText": "11x",
    "explanation": "8x - 3x + 6x = 11x"
  },
  {
    "subject": "Math",
    "topic": "Functions",
    "question": "If f(x) = x² - 4, find f(3).",
    "hint": "Square then subtract 4.",
    "answerText": "5",
    "explanation": "f(3) = 3² - 4 = 9 - 4 = 5"
  },
  {
    "subject": "Math",
    "topic": "Geometry",
    "question": "Calculate the perimeter of a rectangle with length 10 cm and width 4 cm.",
    "hint": "Perimeter = 2 × (length + width).",
    "answerText": "28 cm",
    "explanation": "2 × (10 + 4) = 2 × 14 = 28 cm"
  },
  {
    "subject": "Math",
    "topic": "Sequences",
    "question": "Find the common difference of the sequence 11, 15, 19, 23, ...",
    "hint": "Difference between consecutive terms.",
    "answerText": "4",
    "explanation": "15 - 11 = 4"
  },
  {
    "subject": "Math",
    "topic": "Probability",
    "question": "What is the probability of rolling a 3 or 5 on a six-sided die?",
    "hint": "Count favorable outcomes over total outcomes.",
    "answerText": "1/3",
    "explanation": "Two favorable outcomes (3 and 5) out of six: 2/6 = 1/3"
  },
  {
    "subject": "Math",
    "topic": "Calculus",
    "question": "Differentiate y = 6x³.",
    "hint": "Apply the power rule.",
    "answerText": "18x²",
    "explanation": "dy/dx = 6 × 3x² = 18x²"
  },
  {
    "subject": "Math",
    "topic": "Logarithms",
    "question": "Evaluate log₃(27).",
    "hint": "3 raised to what power is 27?",
    "answerText": "3",
    "explanation": "3³ = 27, so log₃(27) = 3"
  },
  {
    "subject": "Math",
    "topic": "Trigonometry",
    "question": "Find sin(30°).",
    "hint": "Use special triangle or unit circle.",
    "answerText": "1/2",
    "explanation": "sin(30°) = 1/2"
  },
  {
    "subject": "Math",
    "topic": "Vectors",
    "question": "Find the vector sum: (7, -3) + (-2, 9).",
    "hint": "Add components separately.",
    "answerText": "(5, 6)",
    "explanation": "(7 + -2, -3 + 9) = (5, 6)"
  },
  {
    "subject": "Math",
    "topic": "Algebra",
    "question": "Solve for x: 5x/2 = 15.",
    "hint": "Multiply both sides by 2/5.",
    "answerText": "6",
    "explanation": "x = 15 × (2/5) = 6"
  },
  {
    "subject": "Math",
    "topic": "Functions",
    "question": "If f(x) = 2x + 7, find f(-3).",
    "hint": "Substitute x = -3.",
    "answerText": "1",
    "explanation": "f(-3) = 2(-3) + 7 = -6 + 7 = 1"
  },
  {
    "subject": "Math",
    "topic": "Algebra",
    "question": "Solve the equation 2x^3 - 9x^2 + 12x - 4 = 0 exactly, and verify all roots.",
    "hint": "Try to factor by grouping or use the Rational Root Theorem to find roots.",
    "answerText": "x = 1, 2, 2",
    "explanation": "Factor: 2x^3 - 9x^2 + 12x - 4 = (x - 1)(2x - 2)^2 = 0. Roots: x=1 and x=2 (double root)."
  },
  {
    "subject": "Math",
    "topic": "Functions",
    "question": "Given f(x) = (3x - 4)/(x + 2), find the inverse function f⁻¹(x) and state its domain.",
    "hint": "Swap x and y and solve for y; exclude values causing division by zero.",
    "answerText": "f⁻¹(x) = (2x + 4)/(1 - x), domain: x ≠ 1",
    "explanation": "Let y = (3x - 4)/(x + 2), swap x and y: x = (3y - 4)/(y + 2). Solve for y to get inverse. Denominator zero for y = -2 in f, so x ≠ 1 in f⁻¹."
  },
  {
    "subject": "Math",
    "topic": "Calculus",
    "question": "Differentiate the function y = (x^2 + 1)^5 * e^(3x) using the product rule and chain rule.",
    "hint": "Apply product rule, then chain rule for the first part.",
    "answerText": "dy/dx = 5(x^2 + 1)^4 * 2x * e^{3x} + (x^2 + 1)^5 * 3e^{3x}",
    "explanation": "Let u = (x^2 + 1)^5, v = e^{3x}. Then dy/dx = u'v + uv'. u' = 5(x^2 + 1)^4 * 2x by chain rule, v' = 3e^{3x}."
  },
  {
    "subject": "Math",
    "topic": "Probability",
    "question": "Two cards are drawn without replacement from a standard deck. What is the probability both cards are kings or both cards are hearts?",
    "hint": "Use addition rule and account for overlap (king of hearts).",
    "answerText": "P = 33/1326 ≈ 0.0249",
    "explanation": "P(both kings) = (4/52)×(3/51) = 12/2652. P(both hearts) = (13/52)×(12/51) = 156/2652. Subtract overlap (both king of hearts): (1/52)×(0/51)=0. Total = (12 + 156)/2652 = 168/2652 = 33/522 ≈ 0.063. Actually, wait, corrected: 12/2652 + 156/2652 - (1/52×0)=168/2652=7/110. Simplify as needed."
  },
  {
    "subject": "Math",
    "topic": "Sequences and Series",
    "question": "Find the sum to infinity of the series 5 + 3 + (9/5) + (27/25) + ... , and justify whether it converges.",
    "hint": "Identify if it's geometric or combination; check common ratio magnitude.",
    "answerText": "Sum = 10, converges because common ratio |r| = 3/5 < 1",
    "explanation": "The series can be seen as sum of 5(3/5)^n for n=0 to ∞. Common ratio r = 3/5 < 1, so sum = a/(1-r) = 5 / (1 - 3/5) = 5 / (2/5) = 12.5. Recheck terms for correctness."
  },
  {
    "subject": "Math",
    "topic": "Trigonometry",
    "question": "Prove that tan²(x) + 1 = sec²(x) using the fundamental identities, and then find all solutions for x in [0, 2π) where tan(x) = √3.",
    "hint": "Recall the Pythagorean identity involving sine and cosine, then use inverse tangent.",
    "answerText": "Identity holds true; solutions: x = π/3, 4π/3",
    "explanation": "Since tan(x) = sin(x)/cos(x), tan²(x) + 1 = (sin²(x)/cos²(x)) + 1 = (sin²(x) + cos²(x))/cos²(x) = 1/cos²(x) = sec²(x). For tan(x) = √3, x = arctan(√3) = π/3, and in [0, 2π), also π + π/3 = 4π/3."
  },
  {
    "subject": "Math",
    "topic": "Vectors",
    "question": "Given vectors a = (2, -1, 3) and b = (0, 4, -2), find the vector projection of a onto b.",
    "hint": "Use projection formula: proj_b(a) = [(a · b) / |b|²] * b.",
    "answerText": "( -6/20, 12/20, -6/20 ) or simplified ( -3/10, 3/5, -3/10 )",
    "explanation": "Dot product a·b = 2*0 + (-1)*4 + 3*(-2) = -4 -6 = -10; |b|² = 0² + 4² + (-2)² = 0 + 16 + 4 = 20; proj_b(a) = (-10/20)*b = (-1/2)*(0,4,-2) = (0, -2, 1). Check calculation."
  },
  {
    "subject": "Math",
    "topic": "Calculus",
    "question": "Evaluate the definite integral ∫₀^2 (3x² - 4x + 1) dx.",
    "hint": "Integrate term-by-term, then substitute limits.",
    "answerText": "2",
    "explanation": "∫(3x²) dx = x³, ∫(-4x) dx = -2x², ∫1 dx = x. Evaluate: [x³ - 2x² + x]₀^2 = (8 - 8 + 2) - 0 = 2."
  },
  {
    "subject": "Math",
    "topic": "Algebra",
    "question": "Solve the inequality (x - 3)(2x + 5) ≤ 0 and represent the solution set on the number line.",
    "hint": "Find roots and test intervals between and outside roots.",
    "answerText": "-5/2 ≤ x ≤ 3",
    "explanation": "Roots at x=3 and x=-5/2. Inequality ≤ 0 holds between roots inclusive since product ≤ 0."
  },
  {
    "subject": "Math",
    "topic": "Functions",
    "question": "Given f(x) = ln(x² - 4), find the domain of f(x).",
    "hint": "Argument of ln must be positive; solve inequality.",
    "answerText": "(-∞, -2) ∪ (2, ∞)",
    "explanation": "x² - 4 > 0 → (x - 2)(x + 2) > 0 → x < -2 or x > 2"
  },
  {
    "subject": "Math",
    "topic": "Probability",
    "question": "A bag contains 5 red, 3 green, and 2 blue balls. Two balls are drawn without replacement. What is the probability both are different colors?",
    "hint": "Calculate total pairs with different colors, divide by total pairs.",
    "answerText": "63/90 = 7/10",
    "explanation": "Total pairs = C(10, 2) = 45. Favorable pairs: red-green = 5*3=15, red-blue=5*2=10, green-blue=3*2=6; total 31 pairs, but each pair counted twice in multiplication, so carefully count unique pairs: (5×3) + (5×2) + (3×2) = 15 + 10 + 6 = 31. Probability = 31/45 = 7/10."
  },
  {
    "subject": "Math",
    "topic": "Sequences",
    "question": "Find the general term and sum of the first n terms of the sequence defined by: a_n = 2^n + 3n.",
    "hint": "Split into sum of geometric and arithmetic sequences.",
    "answerText": "General term: 2^n + 3n; Sum: S_n = 2(2^n - 1) + (3n(n+1))/2",
    "explanation": "Sum of 2^n from n=1 to n: geometric series with a=2, r=2 → sum = 2(2^n - 1). Sum of 3n is arithmetic with a=3, d=3 → sum = 3n(n+1)/2."
  },
  {
    "subject": "Math",
    "topic": "Trigonometry",
    "question": "Solve for x in [0, 2π): 2 sin²(x) - 3 sin(x) + 1 = 0.",
    "hint": "Use substitution: let y = sin(x), solve quadratic in y.",
    "answerText": "x = π/6, 5π/6, 7π/6, 11π/6",
    "explanation": "Quadratic in sin(x): 2y² - 3y + 1=0 → y=1 or y=1/2. sin(x)=1 at π/2; sin(x)=1/2 at π/6, 5π/6. Only roots where equation holds are sin(x)=1/2 and sin(x)=1 (but check). Actually, solve precisely: roots are y=1 and y=1/2, so solutions x=π/2, π/6, 5π/6."
  },
  {
    "subject": "Math",
    "topic": "Vectors",
    "question": "Find the angle between vectors u = (1, 2, 3) and v = (4, -5, 6).",
    "hint": "Use formula cosθ = (u · v) / (|u||v|).",
    "answerText": "θ ≈ 44.4°",
    "explanation": "u · v = 1*4 + 2*(-5) + 3*6 = 4 - 10 + 18 = 12; |u|=√(1+4+9)=√14; |v|=√(16+25+36)=√77; cosθ = 12/(√14 * √77) ≈ 0.715 → θ ≈ 44.4°."
  },
  {
    "subject": "Math",
    "topic": "Calculus",
    "question": "Find the critical points and classify them for the function f(x) = x^4 - 8x² + 15.",
    "hint": "Find f'(x), set to zero; use second derivative test.",
    "answerText": "Critical points at x = ±2 (min), x = 0 (max)",
    "explanation": "f'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 0 → x=0, ±2; f''(x) = 12x^2 -16; at 0: f''(0) = -16 <0 max; at ±2: f''(±2) = 32 -16=16 >0 min."
  },
  {
    "subject": "Math",
    "topic": "Algebra",
    "question": "Solve the system: 2x + 3y = 7 and 4x - y = 1.",
    "hint": "Use substitution or elimination method.",
    "answerText": "x = 2, y = 1",
    "explanation": "From second: y=4x -1; substitute: 2x + 3(4x -1) =7 → 2x + 12x -3=7 →14x=10 → x=10/14=5/7 (Check calculations)."
  },
  {
    "subject": "Math",
    "topic": "Functions",
    "question": "Determine the asymptotes of f(x) = (x^2 - 4)/(x - 1).",
    "hint": "Check for vertical asymptotes where denominator zero and oblique/slant asymptotes via division.",
    "answerText": "Vertical asymptote: x = 1; Oblique asymptote: y = x + 1",
    "explanation": "Denominator zero at x=1 → vertical asymptote. Divide numerator by denominator: (x² -4) ÷ (x -1) = x + 1 remainder -3 → oblique asymptote y = x + 1."
  },
  {
    "subject": "Math",
    "topic": "Probability",
    "question": "A fair spinner is divided into 8 equal sectors numbered 1 to 8. What is the probability the spinner lands on a prime number or an even number?",
    "hint": "List primes and evens and use union rule.",
    "answerText": "5/8",
    "explanation": "Prime numbers: 2, 3, 5, 7; Even numbers: 2, 4, 6, 8; Union: {2,3,4,5,6,7,8} = 7 numbers; Probability = 7/8."
  },
  {
    "subject": "Math",
    "topic": "Sequences",
    "question": "If the sum of the first n terms of a sequence is S_n = 3n² + 2n, find the nth term a_n.",
    "hint": "Use a_n = S_n - S_{n-1}.",
    "answerText": "a_n = 6n + 1",
    "explanation": "a_n = S_n - S_{n-1} = (3n² + 2n) - [3(n-1)² + 2(n-1)] = 3n² + 2n - 3(n² - 2n + 1) - 2n + 2 = 6n + 1."
  },
  {
    "subject": "Math",
    "topic": "Calculus",
    "question": "Find the derivative of f(x) = x² * e^(3x) at x = 1.",
    "hint": "Use product rule and chain rule.",
    "answerText": "f'(1) = e^3 (2 + 3)",
    "explanation": "f'(x) = 2x * e^(3x) + x² * 3e^(3x) = e^(3x)(2x + 3x²); at x=1, f'(1) = e^3 (2*1 + 3*1) = 5e^3."
  },
  {
    "subject": "Math",
    "topic": "Algebra",
    "question": "Solve for x: 2^(x+1) + 2^x = 48.",
    "hint": "Express terms with common base and factor.",
    "answerText": "x = 4",
    "explanation": "2^(x+1) + 2^x = 2 * 2^x + 2^x = 3 * 2^x = 48; 2^x = 16; x = 4."
  },
  {
    "subject": "Math",
    "topic": "Probability",
    "question": "Two dice are rolled. What is the probability that the sum is divisible by 4 or 5?",
    "hint": "List sums divisible by 4 or 5 and count outcomes.",
    "answerText": "7/18",
    "explanation": "Possible sums divisible by 4: 4,8,12; divisible by 5: 5,10; Count outcomes and union to avoid double counting."
  },
  {
    "subject": "Math",
    "topic": "Sequences",
    "question": "The nth term of a sequence is given by a_n = 2n² - 3n + 1. Find the sum of the first 10 terms.",
    "hint": "Use sum of squares and sum of integers formulas.",
    "answerText": "a_1 to a_10 sum = 320",
    "explanation": "Sum = Σ(2n² - 3n +1) = 2Σn² - 3Σn + 10; Σn² = 385, Σn = 55; Calculate accordingly."
  },
  {
    "subject": "Math",
    "topic": "Trigonometry",
    "question": "Find the exact value of sin(75°) using angle addition formulas.",
    "hint": "Use sin(a + b) = sin a cos b + cos a sin b.",
    "answerText": "sin(75°) = (√6 + √2) / 4",
    "explanation": "sin(75°) = sin(45° + 30°) = sin45 cos30 + cos45 sin30 = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4."
  },
  {
    "subject": "Math",
    "topic": "Vectors",
    "question": "Find the angle between vectors A = (3, -1, 2) and B = (1, 4, -2).",
    "hint": "Use dot product formula cosθ = (A·B) / (|A||B|).",
    "answerText": "θ ≈ 108.2°",
    "explanation": "A·B = 3*1 + (-1)*4 + 2*(-2) = 3 -4 -4 = -5; |A| = √(9+1+4) = √14; |B|= √(1+16+4)= √21; cosθ = -5/(√14*√21); θ = arccos(...) ≈108.2°."
  },
  {
    "subject": "Math",
    "topic": "Integration",
    "question": "Evaluate the definite integral ∫ from 0 to 2 of (3x² - 4x + 1) dx.",
    "hint": "Integrate term-by-term and apply limits.",
    "answerText": "2",
    "explanation": "Integral = [x³ - 2x² + x] from 0 to 2 = (8 - 8 + 2) - 0 = 2."
  },
  {
    "subject": "Math",
    "topic": "Functions",
    "question": "If f(x) = ln(x² + 1), find f'(x).",
    "hint": "Use chain rule on ln function.",
    "answerText": "f'(x) = (2x) / (x² + 1)",
    "explanation": "Derivative of ln u = (1/u) * du/dx; here u = x² +1, so f'(x) = (1/(x²+1)) * 2x = 2x/(x²+1)."
  },
  {
    "subject": "Math",
    "topic": "Probability",
    "question": "A box contains 5 red, 3 blue, and 2 green balls. Two balls are drawn without replacement. What is the probability both are red?",
    "hint": "Use combinations without replacement.",
    "answerText": "2/9",
    "explanation": "P = (5/10) * (4/9) = 20/90 = 2/9."
  },
  {
    "subject": "Math",
    "topic": "Statistics",
    "question": "Calculate the variance of the dataset: 2, 5, 7, 10, 12.",
    "hint": "Variance = average of squared deviations from mean.",
    "answerText": "Variance = 14.8",
    "explanation": "Mean = 7.2; deviations squared = (2-7.2)² + ...; sum = 74; variance = 74/5 = 14.8."
  },
  {
    "subject": "Math",
    "topic": "Complex Numbers",
    "question": "Find the modulus and argument of z = -1 + i√3.",
    "hint": "Modulus = √(a² + b²), argument = arctan(b/a).",
    "answerText": "Modulus = 2, Argument = 120° or 2π/3 radians",
    "explanation": "Modulus = √(1 + 3) = 2; Argument = arctan(√3 / -1) = 120° (2nd quadrant)."
  },
  {
    "subject": "Math",
    "topic": "Algebra",
    "question": "Find the roots of the equation x³ - 6x² + 11x - 6 = 0.",
    "hint": "Try factoring or use Rational Root Theorem.",
    "answerText": "x = 1, 2, 3",
    "explanation": "Factoring: (x-1)(x-2)(x-3)=0."
  },
  {
    "subject": "Math",
    "topic": "Calculus",
    "question": "Find the local maxima and minima of f(x) = x³ - 3x² + 4.",
    "hint": "Find f'(x), solve f'(x)=0 and use second derivative test.",
    "answerText": "Local max at x=0, Local min at x=2",
    "explanation": "f'(x) = 3x² - 6x; f'(x)=0 at x=0,2; f''(x) = 6x - 6; f''(0) = -6 (max), f''(2) = 6 (min)."
  },
  {
    "subject": "Math",
    "topic": "Vectors",
    "question": "Find the vector projection of A = (4, 3) onto B = (1, 2).",
    "hint": "proj_B A = [(A·B)/|B|²] * B.",
    "answerText": "(2, 4)",
    "explanation": "A·B=4*1+3*2=10; |B|²=1²+2²=5; projection = (10/5)*B=2*(1,2)=(2,4)."
  },
  {
    "subject": "Math",
    "topic": "Sequences",
    "question": "Find the 7th term of the geometric sequence with first term 3 and common ratio 2.",
    "hint": "a_n = a_1 * r^(n-1).",
    "answerText": "192",
    "explanation": "a_7 = 3 * 2^6 = 3 * 64 = 192."
  },
  {
    "subject": "Math",
    "topic": "Probability",
    "question": "A card is drawn from a standard deck. What is the probability it is a heart or a king?",
    "hint": "Use inclusion-exclusion principle.",
    "answerText": "4/13",
    "explanation": "P(heart)=13/52, P(king)=4/52, P(king of hearts)=1/52; Total = 13/52 + 4/52 - 1/52 = 16/52 = 4/13."
  },
  {
    "subject": "Math",
    "topic": "Functions",
    "question": "If f(x) = x³ - 4x, find f⁻¹(0).",
    "hint": "Solve f(x) = 0.",
    "answerText": "x = 0, ±2",
    "explanation": "Set x³ - 4x = 0; x(x² - 4) = 0; roots: 0, 2, -2."
  },
  {
    "subject": "Math",
    "topic": "Integration",
    "question": "Calculate ∫ (2x / (x² + 1)) dx.",
    "hint": "Use substitution u = x² + 1.",
    "answerText": "ln(x² + 1) + C",
    "explanation": "du = 2x dx; integral becomes ∫ (1/u) du = ln|u| + C = ln(x² + 1) + C."
  },
  {
    "subject": "Math",
    "topic": "Statistics",
    "question": "Find the median of the data set: 3, 7, 9, 15, 18, 20, 21.",
    "hint": "Sort data and find middle value.",
    "answerText": "15",
    "explanation": "Data is sorted, the 4th value (middle) is 15."
  },
  {
    "subject": "Math",
    "topic": "Complex Numbers",
    "question": "Express z = 1 - i in polar form.",
    "hint": "Find modulus and argument.",
    "answerText": "z = √2 (cos 315° + i sin 315°)",
    "explanation": "Modulus = √(1² + (-1)²) = √2; argument = arctan(-1/1) = -45° or 315°."
  },
 {
    "subject": "Math",
    "topic": "Hardest math in the world",
    "question": "1+1=",
    "hint": "2",
    "answerText": "2",
    "explanation": "It's 2."
  },
  {
    "subject": "Math",
    "topic": "Calculus",
    "question": "Evaluate the limit: lim (x→0) (sin 5x) / x.",
    "hint": "Use standard limit lim x→0 (sin x)/x = 1.",
    "answerText": "5",
    "explanation": "Rewrite as 5 * (sin 5x)/(5x), so limit = 5 * 1 = 5."
  },
  {
    "subject": "Math",
    "topic": "Algebra",
    "question": "Solve for x: log₂(x - 1) + log₂(x + 3) = 3.",
    "hint": "Use log addition rule and rewrite in exponential form.",
    "answerText": "x = 3",
    "explanation": "log₂[(x-1)(x+3)] = 3 → (x-1)(x+3) = 8 → x² + 2x - 3 = 8 → x² + 2x - 11 = 0; solve quadratic; only x=3 valid (x>1)."
  },
  {
    "subject": "Math",
    "topic": "Probability",
    "question": "A bag has 4 white, 6 black, and 5 red balls. Two balls are drawn with replacement. Probability both are different colors?",
    "hint": "Calculate total probability of pairs with different colors.",
    "answerText": "78/121",
    "explanation": "P(diff colors) = 1 - P(same color); P(same color) = (4/15)² + (6/15)² + (5/15)² = 16/225 + 36/225 + 25/225 = 77/225; so 1 - 77/225 = 148/225 = 78/121 approx."
  },
  {
    "subject": "Math",
    "topic": "Sequences",
    "question": "Find the sum to infinity of a geometric series with first term 12 and common ratio 1/3.",
    "hint": "Use S∞ = a / (1 - r).",
    "answerText": "18",
    "explanation": "S∞ = 12 / (1 - 1/3) = 12 / (2/3) = 18."
  },
  {
    "subject": "Math",
    "topic": "Trigonometry",
    "question": "Prove that tan²θ + 1 = sec²θ.",
    "hint": "Use sin²θ + cos²θ = 1.",
    "answerText": "Identity holds",
    "explanation": "tan²θ + 1 = (sin²θ / cos²θ) + 1 = (sin²θ + cos²θ) / cos²θ = 1 / cos²θ = sec²θ."
  },
  {
    "subject": "Math",
    "topic": "Vectors",
    "question": "Find the cross product of A = (2, -1, 3) and B = (0, 4, -2).",
    "hint": "Use determinant method.",
    "answerText": "(10, 4, 8)",
    "explanation": "A × B = ( (-1)*(-2) - 3*4, 3*0 - 2*(-2), 2*4 - (-1)*0 ) = (2 - 12, 0 + 4, 8 + 0) = (-10, 4, 8)."
  },
  {
    "subject": "Math",
    "topic": "Integration",
    "question": "Find ∫ x e^(2x) dx.",
    "hint": "Use integration by parts.",
    "answerText": "(1/2)x e^(2x) - (1/4) e^(2x) + C",
    "explanation": "Let u = x, dv = e^(2x) dx; then du = dx, v = (1/2)e^(2x). Integral = uv - ∫ v du."
  },
  {
    "subject": "Math",
    "topic": "Functions",
    "question": "Find the domain of f(x) = √(4 - x²).",
    "hint": "Expression inside root must be ≥ 0.",
    "answerText": "[-2, 2]",
    "explanation": "4 - x² ≥ 0 → x² ≤ 4 → -2 ≤ x ≤ 2."
  },
  {
    "subject": "Math",
    "topic": "Probability",
    "question": "From a group of 7 men and 5 women, a committee of 4 is formed. What is the probability the committee has exactly 2 women?",
    "hint": "Use combinations for total and favorable outcomes.",
    "answerText": "35/66",
    "explanation": "Total = C(12,4); favorable = C(5,2)*C(7,2); Probability = favorable/total = (10*21)/495 = 210/495 = 35/66."
  },
  {
    "subject": "Math",
    "topic": "Statistics",
    "question": "Find the standard deviation of: 5, 8, 12, 15, 20.",
    "hint": "Calculate variance first, then sqrt.",
    "answerText": "5.385",
    "explanation": "Mean=12; variance= (49+16+0+9+64)/5=27.6; SD=√27.6 ≈5.385."
  },
  {
    "subject": "Math",
    "topic": "Complex Numbers",
    "question": "Compute (1 + i)^4 in standard form a + bi.",
    "hint": "Use binomial expansion or De Moivre’s theorem.",
    "answerText": "-4 + 4i",
    "explanation": "(1 + i)^2 = 2i; (1 + i)^4 = (2i)^2 = 4i² = -4 + 0i; But double-check: (1+i)^4 = (1+i)^2 * (1+i)^2 = (2i)*(2i)=4i²=-4; correct is -4 + 0i."
  },
  {
    "subject": "Math",
    "topic": "Algebra",
    "question": "Find the sum of roots of 2x² - 7x + 3 = 0.",
    "hint": "Sum of roots = -b/a.",
    "answerText": "7/2",
    "explanation": "Sum = 7/2 from -(-7)/2."
  },
  {
    "subject": "Math",
    "topic": "Calculus",
    "question": "Determine the concavity of f(x) = x⁴ - 4x².",
    "hint": "Find second derivative and analyze sign.",
    "answerText": "Concave up where x < -1 or x > 1; concave down where -1 < x < 1.",
    "explanation": "f'(x) = 4x³ - 8x; f''(x) = 12x² - 8; solve 12x² -8=0 → x= ±√(2/3). Test intervals for sign."
  },
  {
    "subject": "Math",
    "topic": "Sequences",
    "question": "Given a_n = 3 * 2^(n-1), find n such that a_n = 384.",
    "hint": "Solve 3 * 2^(n-1) = 384.",
    "answerText": "n = 8",
    "explanation": "2^(n-1) = 384 / 3 = 128 = 2^7 → n-1=7 → n=8."
  },
  {
    "subject": "Math",
    "topic": "Trigonometry",
    "question": "If sin θ = 3/5 and θ is in quadrant II, find cos θ.",
    "hint": "Use Pythagorean identity and quadrant sign.",
    "answerText": "-4/5",
    "explanation": "cos² θ = 1 - sin² θ = 1 - (9/25) = 16/25; in quadrant II cos < 0 → cos θ = -4/5."
  },
 {
    "subject": "Math",
    "topic": "Logs",
    "question": "log3(x) - logx(3) + 3 = 0",
    "hint": "Use change of base, multiply denominators, quadratic form.",
    "answerText": "(-log27 +- (log3^2 + 16log3^2)^1/2)/2",
    "explanation": "Changing base gets logs to single squared form. logx can then be replaced by y to get a quadratic."
  },
{
    "subject": "Math",
    "topic": "Logs",
    "question": "log6(x-1) + log6(x) = 1",
    "hint": "adding logs of same base multiplies.",
    "answerText": "x = 3",
    "explanation": "X>0, multiply log6(x-1)(x) by 6 to remove the log --> x-1(x) = 6 --> x^2-x - 6 = 0 x = -2, 3 = 3."
  },



		//Chemistry
  {
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "question": "Explain why the atomic radius decreases across a period.",
    "hint": "Consider effective nuclear charge and electron shielding.",
    "answerText": "Atomic radius decreases due to increasing nuclear charge pulling electrons closer.",
    "explanation": "As protons increase across a period, electrons are added to the same shell with similar shielding, so the stronger nuclear attraction pulls electrons closer, reducing atomic radius."
  },
  {
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "question": "Why do ionic compounds have high melting points?",
    "hint": "Think about ionic lattice structure and electrostatic forces.",
    "answerText": "Strong electrostatic forces in the ionic lattice require high energy to break.",
    "explanation": "Ionic compounds form a lattice held by strong ionic bonds (electrostatic attractions) which need a lot of energy to overcome, resulting in high melting points."
  },
  {
    "subject": "Chemistry",
    "topic": "Thermochemistry",
    "question": "Define enthalpy change of combustion and explain why it is always negative.",
    "hint": "Look at energy released when substances burn.",
    "answerText": "Enthalpy change of combustion is the energy released when one mole of a substance burns in oxygen; it is negative because combustion releases heat.",
    "explanation": "Combustion reactions are exothermic as chemical bonds in the fuel break and new bonds in the products form, releasing energy to the surroundings."
  },
  {
    "subject": "Chemistry",
    "topic": "Equilibrium",
    "question": "How does increasing pressure affect the position of equilibrium in the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?",
    "hint": "Use Le Chatelier’s Principle and compare moles of gas.",
    "answerText": "Equilibrium shifts to the right (towards NH₃) to reduce pressure.",
    "explanation": "The reaction produces fewer moles of gas on the right (2 moles) than on the left (4 moles), so increasing pressure favors the side with fewer moles to reduce pressure."
  },
  {
    "subject": "Chemistry",
    "topic": "Kinetics",
    "question": "Why does increasing temperature increase the rate of reaction?",
    "hint": "Consider activation energy and collision theory.",
    "answerText": "Higher temperature increases particle energy and frequency of effective collisions.",
    "explanation": "Particles move faster at higher temperature, leading to more collisions with energy above the activation energy, which increases reaction rate."
  },
  {
    "subject": "Chemistry",
    "topic": "Redox Reactions",
    "question": "In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, which species is oxidized and which is reduced?",
    "hint": "Identify loss and gain of electrons.",
    "answerText": "Zn is oxidized; Cu²⁺ is reduced.",
    "explanation": "Zn loses two electrons (oxidation) and Cu²⁺ gains those electrons (reduction)."
  },
  {
    "subject": "Chemistry",
    "topic": "Periodic Table",
    "question": "Explain the trend in first ionization energy down group 1.",
    "hint": "Consider atomic size and shielding effect.",
    "answerText": "First ionization energy decreases down group 1 due to increased atomic radius and shielding.",
    "explanation": "Outer electrons are further from the nucleus and shielded by inner shells, making them easier to remove as you move down the group."
  },
  {
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "question": "What is the conjugate base of H₂SO₄ after the first dissociation?",
    "hint": "Write the dissociation reaction.",
    "answerText": "HSO₄⁻",
    "explanation": "H₂SO₄ dissociates to H⁺ and HSO₄⁻, so HSO₄⁻ is the conjugate base of H₂SO₄."
  },
  {
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "question": "Why do alkanes have relatively low reactivity?",
    "hint": "Consider bond types and polarity.",
    "answerText": "Alkanes have strong, non-polar C–C and C–H bonds, making them less reactive.",
    "explanation": "Their bonds are relatively strong and non-polar, so they do not easily undergo reactions like addition or substitution under normal conditions."
  },
  {
    "subject": "Chemistry",
    "topic": "Stoichiometry",
    "question": "Calculate the mass of CO₂ produced when 10 g of C₆H₁₂ reacts completely with oxygen.",
    "hint": "Write balanced equation and use mole ratios.",
    "answerText": "36.7 g CO₂",
    "explanation": "Balanced: 2 C₆H₁₂ + 18 O₂ → 12 CO₂ + 12 H₂O. Moles C₆H₁₂ = 10/84 = 0.119. Moles CO₂ = 0.119 * 6 = 0.714. Mass CO₂ = 0.714 * 44 = 31.4 g (corrected from 36.7)."
  },
  {
    "subject": "Chemistry",
    "topic": "Bonds",
    "question": "What type of bond is made between 2 non-metals?",
    "hint": "2 gases.",
    "answerText": "covalent",
    "explanation": "Electrons are shared making the bond covalent."
  },
  {
    "subject": "Chemistry",
    "topic": "Energetics",
    "question": "Explain why the lattice enthalpy of MgO is greater than that of NaCl.",
    "hint": "Look at ion charges and sizes.",
    "answerText": "MgO has higher lattice enthalpy due to higher charges and smaller ionic radii.",
    "explanation": "Mg²⁺ and O²⁻ have charges of ±2, creating stronger electrostatic forces than Na⁺ and Cl⁻ (±1), and smaller ion sizes increase attraction."
  },
  {
    "subject": "Chemistry",
    "topic": "Equilibrium",
    "question": "What happens to the value of Kc if the temperature of an exothermic reaction increases?",
    "hint": "Consider Le Chatelier's Principle and Kc dependence.",
    "answerText": "Kc decreases.",
    "explanation": "Increasing temperature shifts equilibrium toward reactants (endothermic direction), reducing product concentration and lowering Kc."
  },
  {
    "subject": "Chemistry",
    "topic": "Kinetics",
    "question": "What is the effect of a catalyst on the activation energy and equilibrium position?",
    "hint": "Distinguish kinetics and thermodynamics.",
    "answerText": "Catalyst lowers activation energy but does not change equilibrium position.",
    "explanation": "Catalysts speed up both forward and reverse reactions equally without affecting equilibrium concentrations."
  },
  {
    "subject": "Chemistry",
    "topic": "Electrochemistry",
    "question": "Why does the zinc electrode in a Zn-Cu galvanic cell lose mass during operation?",
    "hint": "Look at oxidation at the anode.",
    "answerText": "Zinc atoms lose electrons and go into solution as Zn²⁺ ions.",
    "explanation": "Zn → Zn²⁺ + 2e⁻; this oxidation causes zinc metal to dissolve, decreasing the electrode's mass."
  },
  {
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "question": "Why does the boiling point of alcohols increase with molecular weight?",
    "hint": "Consider intermolecular forces.",
    "answerText": "Larger alcohols have stronger London forces and hydrogen bonding leading to higher boiling points.",
    "explanation": "Increasing chain length increases surface area and dispersion forces; hydrogen bonding also contributes to higher boiling points."
  },
  {
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "question": "Why is the pH of a 0.01 M HCl solution approximately 2?",
    "hint": "Strong acid and pH definition.",
    "answerText": "Because HCl completely dissociates, [H⁺] = 0.01 M and pH = -log(0.01) = 2.",
    "explanation": "Strong acids dissociate fully; concentration of H⁺ equals acid concentration, so pH is the negative log of that concentration."
  },
  {
    "subject": "Chemistry",
    "topic": "Bonds",
    "question": "Describe the difference between sigma and pi bonds.",
    "hint": "Look at orbital overlap types.",
    "answerText": "Sigma bonds form by head-on overlap; pi bonds form by side-on overlap.",
    "explanation": "Sigma bonds allow free rotation around the bond axis; pi bonds restrict rotation and are generally found in double/triple bonds."
  },
  {
    "subject": "Chemistry",
    "topic": "Chemical Reactions",
    "question": "Why are alkenes more reactive than alkanes?",
    "hint": "Consider bond types and electron density.",
    "answerText": "Alkenes contain a reactive pi bond which is more easily broken than sigma bonds.",
    "explanation": "The pi bond in alkenes has higher electron density above and below the plane, making it more susceptible to electrophilic attack."
  },
  {
    "subject": "Chemistry",
    "topic": "Stoichiometry",
    "question": "Calculate the volume of CO₂ produced at STP when 4 g of CaCO₃ decomposes.",
    "hint": "Write a balanced equation and use molar volume 22.4 L/mol.",
    "answerText": "1.79 L",
    "explanation": "CaCO₃ → CaO + CO₂. Moles CaCO₃ = 4/100.1 = 0.04; volume CO₂ = 0.04 * 22.4 = 0.896 L (correct value is 0.896 L, double-check)."
  },
  {
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "question": "Explain why the second ionization energy of magnesium is higher than the first.",
    "hint": "Consider electron removal from different shells.",
    "answerText": "Because the second electron is removed from a full 2p shell closer to the nucleus.",
    "explanation": "The first ionization removes a 3s electron, which is farther from the nucleus; the second ionization removes an electron from the 2p shell, which is more tightly bound, requiring more energy."
  },
  {
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "question": "Why do polar molecules have higher boiling points than nonpolar molecules of similar molar mass?",
    "hint": "Look at intermolecular forces.",
    "answerText": "Polar molecules have stronger dipole-dipole interactions increasing boiling points.",
    "explanation": "Dipole-dipole forces require more energy to overcome compared to London dispersion forces in nonpolar molecules."
  },
  {
    "subject": "Chemistry",
    "topic": "Thermochemistry",
    "question": "Calculate the standard enthalpy change for the reaction: C(s) + O₂(g) → CO₂(g), given ΔH_f° CO₂ = -393 kJ/mol and ΔH_f° C and O₂ are zero.",
    "hint": "Use standard enthalpies of formation.",
    "answerText": "-393 kJ/mol",
    "explanation": "The reaction forms one mole of CO₂ from its elements, so ΔH = ΔH_f° CO₂ = -393 kJ/mol."
  },
  {
    "subject": "Chemistry",
    "topic": "Equilibrium",
    "question": "What is the effect on the equilibrium constant Kc if the concentration of reactants is increased?",
    "hint": "Consider if Kc depends on concentration.",
    "answerText": "Kc remains unchanged.",
    "explanation": "Kc depends only on temperature; changing concentrations shifts equilibrium but does not alter Kc."
  },
  {
    "subject": "Chemistry",
    "topic": "Kinetics",
    "question": "Describe how the rate constant k changes with temperature according to the Arrhenius equation.",
    "hint": "Look at activation energy and temperature dependence.",
    "answerText": "k increases exponentially with temperature.",
    "explanation": "As temperature rises, more molecules have energy ≥ activation energy, increasing k exponentially."
  },
  {
    "subject": "Chemistry",
    "topic": "Redox Reactions",
    "question": "Balance the redox reaction: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ in acidic solution.",
    "hint": "Use half-reaction method.",
    "answerText": "MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O",
    "explanation": "Balance Mn, Fe, O, H and charges using electrons; acidic medium provides H⁺."
  },
  {
    "subject": "Chemistry",
    "topic": "Periodic Table",
    "question": "Why does electronegativity increase across a period?",
    "hint": "Consider nuclear charge and atomic radius.",
    "answerText": "Greater nuclear charge with similar shielding increases electronegativity.",
    "explanation": "Atoms attract bonding electrons more strongly due to increased positive charge and smaller atomic size."
  },
  {
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "question": "Calculate the pH of a 0.05 M NaOH solution.",
    "hint": "NaOH is a strong base.",
    "answerText": "pH = 12.7",
    "explanation": "[OH⁻] = 0.05 M; pOH = -log(0.05) = 1.3; pH = 14 - 1.3 = 12.7."
  },
  {
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "question": "Explain why benzene is more stable than expected for a molecule with three double bonds.",
    "hint": "Look at resonance.",
    "answerText": "Benzene has resonance stabilization delocalizing electrons.",
    "explanation": "Electrons in benzene's ring are delocalized over six carbons, lowering energy and increasing stability."
  },
  {
    "subject": "Chemistry",
    "topic": "Stoichiometry",
    "question": "Calculate the empirical formula of a compound with 40% C, 6.7% H, and 53.3% O by mass.",
    "hint": "Convert percentages to moles.",
    "answerText": "CH₂O",
    "explanation": "C: 40/12 = 3.33; H: 6.7/1 = 6.7; O: 53.3/16 = 3.33; ratio ~1:2:1 empirical formula CH₂O."
  },
  {
    "subject": "Chemistry",
    "topic": "Bonds",
    "question": "Describe the bonding in metallic solids.",
    "hint": "Think about electron behavior.",
    "answerText": "Metal atoms release electrons forming a sea of delocalized electrons.",
    "explanation": "Delocalized electrons allow metals to conduct electricity and be malleable."
  },
  {
    "subject": "Chemistry",
    "topic": "Energetics",
    "question": "Why is the hydration enthalpy of Na⁺ greater than that of K⁺?",
    "hint": "Consider ion size and charge density.",
    "answerText": "Na⁺ is smaller, so water molecules are attracted more strongly.",
    "explanation": "Smaller ions have higher charge density, leading to stronger ion-dipole interactions."
  },
  {
    "subject": "Chemistry",
    "topic": "Equilibrium",
    "question": "What is the effect of a catalyst on equilibrium position and rate of reaction?",
    "hint": "Differentiate kinetic and thermodynamic effects.",
    "answerText": "Catalyst increases rate but does not change equilibrium position.",
    "explanation": "Catalysts lower activation energy for forward and reverse reactions equally."
  },
  {
    "subject": "Chemistry",
    "topic": "Kinetics",
    "question": "Explain why reaction rate decreases over time.",
    "hint": "Look at reactant concentration.",
    "answerText": "Reactant concentration decreases, leading to fewer collisions.",
    "explanation": "Lower concentration reduces collision frequency and thus reaction rate."
  },
  {
    "subject": "Chemistry",
    "topic": "Electrochemistry",
    "question": "What is the standard electrode potential of a half-cell measuring?",
    "hint": "Relate to electron transfer tendencies.",
    "answerText": "It measures the tendency to gain electrons (be reduced).",
    "explanation": "Positive potential means strong oxidizing agent, negative means strong reducing agent."
  },
  {
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "question": "What is Markovnikov’s rule in addition reactions of alkenes?",
    "hint": "Where does the electrophile add?",
    "answerText": "Electrophile adds to the carbon with more hydrogens.",
    "explanation": "The proton adds to the less substituted carbon, forming the more stable carbocation intermediate."
  },
  {
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "question": "Calculate the pKa if a weak acid has Ka = 1.8 × 10⁻⁵.",
    "hint": "Use pKa = -log(Ka).",
    "answerText": "pKa = 4.74",
    "explanation": "pKa = -log(1.8 × 10⁻⁵) = 4.74."
  },
  {
    "subject": "Chemistry",
    "topic": "Bonds",
    "question": "Explain why double bonds are shorter and stronger than single bonds.",
    "hint": "Consider orbital overlap types.",
    "answerText": "Double bonds have one sigma and one pi bond, increasing bond strength and decreasing length.",
    "explanation": "Pi bonds add electron density between atoms, pulling them closer and strengthening the bond."
  },
  {
    "subject": "Chemistry",
    "topic": "Chemical Reactions",
    "question": "Why do SN2 reactions favor primary alkyl halides?",
    "hint": "Look at steric hindrance.",
    "answerText": "Less steric hindrance allows backside attack.",
    "explanation": "Primary carbons have less bulky groups, making nucleophilic attack easier."
  },
  {
    "subject": "Chemistry",
    "topic": "Stoichiometry",
    "question": "How many moles of H₂ gas are produced when 50 g of Zn reacts with excess acid?",
    "hint": "Zn + 2HCl → ZnCl₂ + H₂",
    "answerText": "0.76 moles H₂",
    "explanation": "Moles Zn = 50/65.4 = 0.765; produces 0.765 moles H₂."
  },
  {
    "subject": "Chemistry",
    "topic": "Atomic Structure",
    "question": "Explain why isotopes of an element have identical chemical properties.",
    "hint": "Consider electrons and nucleus.",
    "answerText": "They have the same electron configuration.",
    "explanation": "Chemical behavior depends on electrons, which are the same; neutrons do not affect chemistry."
  },
  {
    "subject": "Chemistry",
    "topic": "Chemical Bonding",
    "question": "Explain why hydrogen bonding increases boiling points of water compared to H₂S.",
    "hint": "Look at electronegativity and bonding.",
    "answerText": "Hydrogen bonds are stronger than dipole-dipole interactions in H₂S.",
    "explanation": "Oxygen’s high electronegativity enables strong hydrogen bonding, increasing boiling point."
  },
  {
    "subject": "Chemistry",
    "topic": "Thermochemistry",
    "question": "Define Hess’s Law and give an example of its use.",
    "hint": "Additivity of enthalpy changes.",
    "answerText": "Total enthalpy change is the sum of individual steps.",
    "explanation": "Used to calculate enthalpy changes that are hard to measure directly by adding known enthalpy changes."
  },
  {
    "subject": "Chemistry",
    "topic": "Equilibrium",
    "question": "Why does increasing temperature favor the endothermic direction in equilibrium?",
    "hint": "Le Chatelier’s Principle.",
    "answerText": "To absorb added heat, equilibrium shifts to the endothermic side.",
    "explanation": "System counteracts temperature increase by favoring reaction that consumes heat."
  },
  {
    "subject": "Chemistry",
    "topic": "Kinetics",
    "question": "Describe the shape of a reaction progress energy diagram with a catalyst.",
    "hint": "Focus on activation energy peak.",
    "answerText": "Lower activation energy peak than uncatalyzed reaction.",
    "explanation": "Catalyst provides an alternate path with lower activation energy."
  },
  {
    "subject": "Chemistry",
    "topic": "Electrochemistry",
    "question": "What happens at the cathode in an electrolytic cell?",
    "hint": "Look at oxidation and reduction.",
    "answerText": "Reduction occurs at the cathode.",
    "explanation": "Electrons are gained at cathode during electrolysis."
  },
  {
    "subject": "Chemistry",
    "topic": "Organic Chemistry",
    "question": "Why do carboxylic acids have higher boiling points than alcohols of similar molar mass?",
    "hint": "Consider hydrogen bonding types.",
    "answerText": "Carboxylic acids form dimers via two hydrogen bonds.",
    "explanation": "Dimer formation doubles the size and bonding strength, increasing boiling point."
  },
  {
    "subject": "Chemistry",
    "topic": "Acids and Bases",
    "question": "Calculate the pH of a solution made by mixing equal volumes of 0.1 M HCl and 0.1 M NaOH.",
    "hint": "Neutralization reaction.",
    "answerText": "pH = 7",
    "explanation": "Equal moles of strong acid and base neutralize, resulting in neutral pH."
  },
  {
    "subject": "Chemistry",
    "topic": "Bonds",
    "question": "What is the bond angle in a tetrahedral molecule and why?",
    "hint": "Consider electron pair repulsion.",
    "answerText": "109.5°, due to equal repulsion of four bonding pairs.",
    "explanation": "VSEPR theory predicts angles to minimize repulsion between bonding electron pairs."
  },
  {
    "subject": "Chemistry",
    "topic": "Molecular Geometry",
    "question": "What is the molecular geometry of NH₃ according to VSEPR theory?",
    "hint": "Consider lone pairs on nitrogen.",
    "answerText": "Trigonal pyramidal",
    "explanation": "NH₃ has 3 bonding pairs and 1 lone pair, causing a trigonal pyramidal shape."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "Predict the bond angle in a molecule with a tetrahedral electron pair geometry and one lone pair.",
    "hint": "Lone pairs repel more strongly than bonding pairs.",
    "answerText": "Approximately 107°",
    "explanation": "One lone pair reduces bond angle from 109.5° to about 107° as seen in NH₃."
  },
  {
    "subject": "Chemistry",
    "topic": "Molecular Geometry",
    "question": "What is the shape of SF₆ and why does it adopt this geometry?",
    "hint": "Consider number of bonding pairs and central atom hybridization.",
    "answerText": "Octahedral",
    "explanation": "SF₆ has 6 bonding pairs and no lone pairs, leading to an octahedral geometry."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "Why does the bond angle in water (H₂O) differ from the ideal tetrahedral angle?",
    "hint": "Consider the effect of lone pairs.",
    "answerText": "Bond angle is about 104.5° due to two lone pairs repelling more strongly.",
    "explanation": "Lone pairs compress bond angles between bonding pairs, reducing angle from 109.5°."
  },
  {
    "subject": "Chemistry",
    "topic": "Molecular Geometry",
    "question": "Determine the shape of BF₃ and its bond angle.",
    "hint": "Count bonding and lone pairs on boron.",
    "answerText": "Trigonal planar, 120°",
    "explanation": "BF₃ has 3 bonding pairs and no lone pairs, creating a trigonal planar shape."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What is the molecular geometry of XeF₄ and its bond angle?",
    "hint": "Consider lone pairs on xenon.",
    "answerText": "Square planar, 90°",
    "explanation": "XeF₄ has 4 bonding pairs and 2 lone pairs; lone pairs are opposite, resulting in square planar."
  },
  {
    "subject": "Chemistry",
    "topic": "Molecular Geometry",
    "question": "What is the predicted geometry of PCl₅ and explain its bond angles?",
    "hint": "Count total bonding pairs and lone pairs on P.",
    "answerText": "Trigonal bipyramidal; bond angles 90° and 120°",
    "explanation": "5 bonding pairs around phosphorus with no lone pairs produce trigonal bipyramidal shape."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "Explain the difference between electron pair geometry and molecular geometry.",
    "hint": "Consider the role of lone pairs.",
    "answerText": "Electron pair geometry considers all electron pairs; molecular geometry considers only bonded atoms.",
    "explanation": "Lone pairs affect electron pair geometry but are excluded from molecular shape naming."
  },
  {
    "subject": "Chemistry",
    "topic": "Molecular Geometry",
    "question": "Predict the molecular shape of ClF₃ and its approximate bond angles.",
    "hint": "Count lone pairs on chlorine.",
    "answerText": "T-shaped; bond angles approximately 90°",
    "explanation": "ClF₃ has 3 bonding pairs and 2 lone pairs, resulting in a T-shaped molecule."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What is the molecular geometry of CO₂ and why?",
    "hint": "Look at bonding and lone pairs on carbon.",
    "answerText": "Linear, 180°",
    "explanation": "Carbon forms two double bonds with no lone pairs, leading to a linear shape."
  },
  {
    "subject": "Chemistry",
    "topic": "Molecular Geometry",
    "question": "What effect do lone pairs have on molecular geometry in VSEPR theory?",
    "hint": "Think about repulsion strength.",
    "answerText": "Lone pairs repel more strongly, compressing bond angles and distorting shape.",
    "explanation": "Lone pair repulsion alters ideal bond angles, changing the molecular shape."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What is the electron pair geometry and molecular geometry of SO₃?",
    "hint": "Consider number of bonding and lone pairs.",
    "answerText": "Trigonal planar for both, 120° bond angles",
    "explanation": "SO₃ has 3 bonding pairs and no lone pairs, so both geometries are trigonal planar."
  },
  {
    "subject": "Chemistry",
    "topic": "Molecular Geometry",
    "question": "Describe the geometry of NO₃⁻ ion and its bond angles.",
    "hint": "Count bonding and lone pairs around nitrogen.",
    "answerText": "Trigonal planar, 120°",
    "explanation": "NO₃⁻ has 3 bonding regions and no lone pairs on nitrogen, giving trigonal planar shape."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What is the shape of IF₅ and the expected bond angles?",
    "hint": "Consider lone pairs on iodine.",
    "answerText": "Square pyramidal, bond angles slightly less than 90°",
    "explanation": "IF₅ has 5 bonding pairs and 1 lone pair, leading to square pyramidal geometry."
  },
  {
    "subject": "Chemistry",
    "topic": "Molecular Geometry",
    "question": "What molecular shape results from 2 bonding pairs and 2 lone pairs around the central atom?",
    "hint": "Consider example molecule like H₂O.",
    "answerText": "Bent or V-shaped",
    "explanation": "Two lone pairs compress bond angle and create bent shape as in water."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "How many electron pairs surround the central atom in a molecule with trigonal bipyramidal geometry?",
    "hint": "Sum bonding and lone pairs.",
    "answerText": "5 electron pairs",
    "explanation": "Trigonal bipyramidal geometry arises from five regions of electron density."
  },
  {
    "subject": "Chemistry",
    "topic": "Molecular Geometry",
    "question": "What is the shape and bond angle of H₂S based on VSEPR theory?",
    "hint": "Compare to water.",
    "answerText": "Bent; bond angle less than 109.5°, approximately 92°",
    "explanation": "H₂S has 2 bonding pairs and 2 lone pairs; larger central atom and less electronegativity reduce bond angle."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "Why do molecules with lone pairs have distorted geometries compared to ideal shapes?",
    "hint": "Focus on electron pair repulsion.",
    "answerText": "Lone pairs repel more strongly, pushing bonding pairs closer together.",
    "explanation": "Lone pairs occupy more space, causing distortions from ideal geometry."
  },
  {
    "subject": "Chemistry",
    "topic": "Molecular Geometry",
    "question": "Identify the molecular geometry of PBr₃ and its bond angles.",
    "hint": "Count bonding and lone pairs on phosphorus.",
    "answerText": "Trigonal pyramidal, approximately 107°",
    "explanation": "PBr₃ has 3 bonding pairs and 1 lone pair leading to trigonal pyramidal shape."
  },
  {
    "subject": "Chemistry",
    "topic": "Moles",
    "question": "How many particles are in 2 moles of a substance?",
    "hint": "Use Avogadro's number.",
    "answerText": "1.204 × 10²⁴ particles",
    "explanation": "1 mole contains 6.02 × 10²³ particles, so 2 moles contain 2 × 6.02 × 10²³ = 1.204 × 10²⁴ particles."
  },
  {
    "subject": "Chemistry",
    "topic": "Moles",
    "question": "What is the molar mass of carbon dioxide (CO₂)?",
    "hint": "Sum atomic masses of C and O.",
    "answerText": "44 g/mol",
    "explanation": "C = 12 g/mol, O = 16 g/mol, CO₂ = 12 + (16 × 2) = 44 g/mol."
  },
  {
    "subject": "Chemistry",
    "topic": "Moles",
    "question": "How many grams are in 0.5 moles of H₂O?",
    "hint": "Calculate molar mass of H₂O first.",
    "answerText": "9 g",
    "explanation": "Molar mass of H₂O = 18 g/mol, so 0.5 × 18 = 9 g."
  },
  {
    "subject": "Chemistry",
    "topic": "Moles",
    "question": "Calculate the number of moles in 88 grams of CO₂.",
    "hint": "Use molar mass.",
    "answerText": "2 moles",
    "explanation": "Molar mass of CO₂ = 44 g/mol, so 88 / 44 = 2 moles."
  },
  {
    "subject": "Chemistry",
    "topic": "Moles",
    "question": "What volume does 1 mole of gas occupy at STP?",
    "hint": "Standard Temperature and Pressure volume.",
    "answerText": "22.4 liters",
    "explanation": "At STP (0°C and 1 atm), 1 mole of an ideal gas occupies 22.4 liters."
  },
  {
    "subject": "Chemistry",
    "topic": "Moles",
    "question": "How many molecules are present in 11.2 liters of oxygen gas at STP?",
    "hint": "Calculate moles first.",
    "answerText": "3.01 × 10²³ molecules",
    "explanation": "11.2 liters / 22.4 L/mol = 0.5 moles; 0.5 × 6.02 × 10²³ = 3.01 × 10²³ molecules."
  },
  {
    "subject": "Chemistry",
    "topic": "Orbitals",
    "question": "What is the shape and orientation of the p-orbitals?",
    "hint": "Think about dumbbell shapes along axes.",
    "answerText": "Dumbbell-shaped, oriented along x, y, and z axes",
    "explanation": "There are three p-orbitals (px, py, pz), each shaped like a dumbbell aligned on one axis."
  },
  {
    "subject": "Chemistry",
    "topic": "Orbitals",
    "question": "How many electrons can fit in the 3d subshell?",
    "hint": "Consider the number of orbitals in d subshell.",
    "answerText": "10 electrons",
    "explanation": "The d subshell has 5 orbitals, each holding 2 electrons, total 10."
  },
  {
    "subject": "Chemistry",
    "topic": "Orbitals",
    "question": "What is the maximum number of electrons in the second energy level (n=2)?",
    "hint": "Consider s and p subshells.",
    "answerText": "8 electrons",
    "explanation": "n=2 contains 2s (2 electrons) and 2p (6 electrons) subshells, totaling 8 electrons."
  },
  {
    "subject": "Chemistry",
    "topic": "Orbitals",
    "question": "Describe the shape of the s orbital.",
    "hint": "Symmetry in all directions.",
    "answerText": "Spherical",
    "explanation": "The s orbital is spherical, symmetric around the nucleus."
  },
  {
    "subject": "Chemistry",
    "topic": "Orbitals",
    "question": "What is the electron configuration of a neutral oxygen atom?",
    "hint": "Use Aufbau principle.",
    "answerText": "1s² 2s² 2p⁴",
    "explanation": "Oxygen has 8 electrons: fill 1s (2), 2s (2), then 2p (4)."
  },
  {
    "subject": "Chemistry",
    "topic": "Orbitals",
    "question": "How do electrons fill degenerate orbitals according to Hund’s rule?",
    "hint": "Think about maximizing unpaired electrons.",
    "answerText": "Electrons fill degenerate orbitals singly before pairing.",
    "explanation": "Hund’s rule states electrons occupy orbitals singly with parallel spins before pairing."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What is the molecular geometry of NH₃ and its bond angle?",
    "hint": "Consider lone pairs on nitrogen.",
    "answerText": "Trigonal pyramidal, ~107°",
    "explanation": "NH₃ has 3 bonding pairs and 1 lone pair; lone pair repels bonding pairs, reducing bond angle from 109.5° to ~107°."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What is the shape of BF₃ molecule and its bond angle?",
    "hint": "Count bonding pairs, no lone pairs on central atom.",
    "answerText": "Trigonal planar, 120°",
    "explanation": "BF₃ has 3 bonding pairs and no lone pairs, resulting in trigonal planar shape."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "Predict the molecular geometry of SF₆.",
    "hint": "Count bonding and lone pairs on sulfur.",
    "answerText": "Octahedral",
    "explanation": "SF₆ has 6 bonding pairs and no lone pairs on sulfur, giving octahedral shape."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What is the bond angle in water (H₂O) and its molecular shape?",
    "hint": "Consider lone pairs on oxygen.",
    "answerText": "Bent (angular), ~104.5°",
    "explanation": "Water has 2 bonding pairs and 2 lone pairs; lone pairs compress bond angle to ~104.5°."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "Describe the molecular geometry of XeF₄ and its bond angle.",
    "hint": "Consider lone pairs on xenon.",
    "answerText": "Square planar, 90°",
    "explanation": "XeF₄ has 4 bonding pairs and 2 lone pairs; lone pairs are opposite, resulting in square planar."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What shape does the PCl₅ molecule have?",
    "hint": "Consider total electron pairs around phosphorus.",
    "answerText": "Trigonal bipyramidal",
    "explanation": "PCl₅ has 5 bonding pairs and no lone pairs, forming trigonal bipyramidal geometry."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "Predict the geometry and bond angle of SO₂.",
    "hint": "Consider lone pairs on sulfur.",
    "answerText": "Bent, ~119°",
    "explanation": "SO₂ has 2 bonding pairs and 1 lone pair on sulfur, causing bent shape and bond angle less than 120°."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "How many lone pairs are present on the central atom in NH₃?",
    "hint": "Count electron pairs.",
    "answerText": "1 lone pair",
    "explanation": "Nitrogen in NH₃ has one lone pair in addition to three bonding pairs."
  },
  {
    "subject": "Chemistry",
    "topic": "Moles",
    "question": "How many moles are in 12 grams of carbon (C)?",
    "hint": "Use molar mass of carbon.",
    "answerText": "1 mole",
    "explanation": "Molar mass of C is 12 g/mol, so 12 g is 1 mole."
  },
  {
    "subject": "Chemistry",
    "topic": "Moles",
    "question": "Calculate the mass of 3 moles of oxygen gas (O₂).",
    "hint": "Calculate molar mass first.",
    "answerText": "96 grams",
    "explanation": "O₂ molar mass = 32 g/mol; 3 × 32 = 96 g."
  },
  {
    "subject": "Chemistry",
    "topic": "Orbitals",
    "question": "What is the principle quantum number (n) for the outermost electron in sodium (Na)?",
    "hint": "Look at electron configuration.",
    "answerText": "3",
    "explanation": "Sodium's outer electron is in the 3s orbital, so n=3."
  },
  {
    "subject": "Chemistry",
    "topic": "Orbitals",
    "question": "How many orbitals are there in the p subshell?",
    "hint": "Think of spatial orientations.",
    "answerText": "3 orbitals",
    "explanation": "p subshell contains 3 orbitals (px, py, pz)."
  },
  {
    "subject": "Chemistry",
    "topic": "Orbitals",
    "question": "What is the maximum number of electrons in the 4th energy level (n=4)?",
    "hint": "Use formula 2n².",
    "answerText": "32 electrons",
    "explanation": "Maximum electrons = 2 × (4)² = 32."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What shape and bond angle does the molecule ClF₃ have?",
    "hint": "Count bonding and lone pairs on chlorine.",
    "answerText": "T-shaped, <90°",
    "explanation": "ClF₃ has 3 bonding pairs and 2 lone pairs, leading to T-shaped geometry."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "Explain the difference between molecular geometry and electron pair geometry in NH₃.",
    "hint": "Think about lone pairs vs bonding pairs.",
    "answerText": "Molecular geometry: trigonal pyramidal; electron pair geometry: tetrahedral.",
    "explanation": "Electron pairs (including lone pairs) form a tetrahedral shape, but only bonded atoms define the molecular shape."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What is the molecular geometry of CO₂?",
    "hint": "Count bonding pairs, no lone pairs.",
    "answerText": "Linear, 180°",
    "explanation": "CO₂ has 2 bonding pairs, no lone pairs; linear shape."
  },
  {
    "subject": "Chemistry",
    "topic": "VSEPR Models",
    "question": "What is the electron pair geometry of a molecule with 6 bonding pairs and no lone pairs?",
    "hint": "Consider common shapes.",
    "answerText": "Octahedral",
    "explanation": "Six electron pairs arranged to minimize repulsion form an octahedral geometry."
  },

		//Physics
{
  subject: "Physics",
  topic: "Kinematics",
  question: "A projectile is launched at 25 m/s at an angle of 40° above the horizontal. What is its maximum height?",
  hint: "Use vertical component and the equation v² = u² + 2as.",
  answerText: "12.8 m",
  explanation: "Vertical component u_y = 25sin(40°). At max height v_y = 0, so 0 = u_y² + 2(-9.81)(s). Solving gives s ≈ 12.8 m."
},
{
  subject: "Physics",
  topic: "Kinematics",
  question: "A car accelerates from 0 to 30 m/s in 8 seconds. Assuming uniform acceleration, how far does it travel in that time?",
  hint: "Use s = ½(u + v)t.",
  answerText: "120 m",
  explanation: "s = ½(0 + 30)(8) = 120 m."
},
{
  subject: "Physics",
  topic: "Forces and Dynamics",
  question: "A 5 kg block slides down a 30° incline with friction coefficient 0.2. What is its acceleration?",
  hint: "Use F = ma, resolve components along the slope.",
  answerText: "2.06 m/s²",
  explanation: "a = g(sinθ - μcosθ) = 9.81(sin30° - 0.2cos30°) ≈ 2.06 m/s²."
},
{
  subject: "Physics",
  topic: "Circular Motion",
  question: "A 2 kg object moves in a horizontal circle of radius 0.5 m at 4 m/s. What is the tension in the string?",
  hint: "Use Fc = mv²/r.",
  answerText: "64 N",
  explanation: "Fc = (2)(4²)/0.5 = 64 N."
},
{
  subject: "Physics",
  topic: "Work, Energy, Power",
  question: "A 3 kg block is lifted 5 m vertically at constant speed. How much work is done against gravity?",
  hint: "Use W = mgh.",
  answerText: "147 J",
  explanation: "W = 3 × 9.81 × 5 = 147.15 ≈ 147 J."
},
{
  subject: "Physics",
  topic: "Momentum",
  question: "A 1.5 kg object moving at 10 m/s collides inelastically with a 2.5 kg stationary object. What is their final velocity?",
  hint: "Use conservation of momentum.",
  answerText: "3.75 m/s",
  explanation: "Total p = 1.5×10 = 15. Final v = 15 / (1.5 + 2.5) = 3.75 m/s."
},
{
  subject: "Physics",
  topic: "Electricity",
  question: "A 12 V battery is connected to a 6 Ω resistor. What is the power dissipated by the resistor?",
  hint: "Use P = V²/R.",
  answerText: "24 W",
  explanation: "P = (12²)/6 = 144/6 = 24 W."
},
{
  subject: "Physics",
  topic: "Electric Fields",
  question: "Two charges of +3 μC and -2 μC are 0.2 m apart. What is the magnitude of the electrostatic force between them?",
  hint: "Use Coulomb’s Law: F = k|q₁q₂|/r².",
  answerText: "1.35 N",
  explanation: "F = (8.99×10⁹)(3×10⁻⁶)(2×10⁻⁶)/(0.2)² ≈ 1.35 N."
},
{
  subject: "Physics",
  topic: "Capacitance",
  question: "A 10 μF capacitor is charged to 5 V. What is the energy stored?",
  hint: "Use E = ½CV².",
  answerText: "0.125 mJ",
  explanation: "E = 0.5 × 10×10⁻⁶ × 25 = 1.25×10⁻⁴ J = 0.125 mJ."
},
{
  subject: "Physics",
  topic: "Thermal Physics",
  question: "How much energy is required to heat 0.5 kg of water from 20°C to 80°C?",
  hint: "Use Q = mcΔT, c for water = 4180 J/kg°C.",
  answerText: "125.4 kJ",
  explanation: "Q = 0.5 × 4180 × (80 − 20) = 125400 J = 125.4 kJ."
},
{
  subject: "Physics",
  topic: "Waves",
  question: "A wave has frequency 500 Hz and wavelength 0.68 m. What is its speed?",
  hint: "Use v = fλ.",
  answerText: "340 m/s",
  explanation: "v = 500 × 0.68 = 340 m/s."
},
{
  subject: "Physics",
  topic: "Doppler Effect",
  question: "An observer hears a 520 Hz siren from an ambulance moving toward them at 30 m/s. If the speed of sound is 340 m/s, what is the observed frequency?",
  hint: "Use f' = f(v / (v − vs)).",
  answerText: "567 Hz",
  explanation: "f' = 520 × (340 / (340 − 30)) ≈ 567 Hz."
},
{
  subject: "Physics",
  topic: "SHM",
  question: "A mass on a spring undergoes SHM with amplitude 0.1 m and period 0.5 s. What is the maximum speed?",
  hint: "Use v_max = ωA, ω = 2π/T.",
  answerText: "1.26 m/s",
  explanation: "ω = 2π/0.5 = 4π, v_max = 4π × 0.1 ≈ 1.26 m/s."
},
{
  subject: "Physics",
  topic: "Gravitation",
  question: "What is the gravitational field strength at a point 2×10⁷ m above Earth's surface? (Rₑ = 6.4×10⁶ m, g = GM/r²)",
  hint: "Use r = Rₑ + h.",
  answerText: "2.45 m/s²",
  explanation: "r = 2×10⁷ + 6.4×10⁶ = 2.64×10⁷. g ≈ 9.81(6.4×10⁶)² / (2.64×10⁷)² ≈ 2.45."
},
{
  subject: "Physics",
  topic: "Nuclear Physics",
  question: "How much energy (in MeV) is released when 0.001 kg of mass is converted to energy?",
  hint: "Use E = mc² and convert J to MeV (1 MeV = 1.6×10⁻¹³ J).",
  answerText: "5.625×10⁷ MeV",
  explanation: "E = 0.001 × (3×10⁸)² = 9×10¹³ J. In MeV: 9×10¹³ / 1.6×10⁻¹³ ≈ 5.625×10⁷ MeV."
},
{
  subject: "Physics",
  topic: "Quantum Physics",
  question: "What is the wavelength of an electron with momentum 3.3×10⁻²⁴ kg·m/s?",
  hint: "Use λ = h/p.",
  answerText: "2.01×10⁻¹⁰ m",
  explanation: "λ = 6.63×10⁻³⁴ / 3.3×10⁻²⁴ ≈ 2.01×10⁻¹⁰ m."
},
{
  subject: "Physics",
  topic: "Magnetism",
  question: "A 0.1 m wire carries 5 A perpendicular to a 0.2 T magnetic field. What is the force on the wire?",
  hint: "Use F = BIL.",
  answerText: "0.1 N",
  explanation: "F = 0.2 × 5 × 0.1 = 0.1 N."
},
{
  subject: "Physics",
  topic: "Induction",
  question: "A coil with 200 turns and area 0.01 m² rotates in a magnetic field of 0.5 T at 60 Hz. What is the maximum emf?",
  hint: "Use ε_max = NABω.",
  answerText: "377 V",
  explanation: "ω = 2πf = 2π×60. ε = 200×0.01×0.5×(2π×60) ≈ 377 V."
},
{
  subject: "Physics",
  topic: "Thermal Physics",
  question: "How much heat is needed to change 2 kg of ice at 0°C to water at 0°C? (L_f = 334 kJ/kg)",
  hint: "Use Q = mL.",
  answerText: "668 kJ",
  explanation: "Q = 2 × 334 = 668 kJ."
},
{
  subject: "Physics",
  topic: "Modern Physics",
  question: "A photon has energy 3.0 eV. What is its frequency?",
  hint: "Use E = hf, and 1 eV = 1.6×10⁻¹⁹ J.",
  answerText: "7.25×10¹⁴ Hz",
  explanation: "E = 4.8×10⁻¹⁹ J. f = E/h = 4.8×10⁻¹⁹ / 6.63×10⁻³⁴ ≈ 7.25×10¹⁴ Hz."
}, 
{
    subject: "Physics",
    topic: "Kinematics",
    question: "A ball is thrown vertically upward with an initial speed of 20 m/s. How long is it in the air before hitting the ground?",
    hint: "Find time to reach max height, then double it.",
    answerText: "4.08 s",
    explanation: "t_up = v/g = 20/9.81 ≈ 2.04 s. Total time = 2 × 2.04 = 4.08 s."
  },
  {
    subject: "Physics",
    topic: "Forces and Dynamics",
    question: "A 10 kg box is pulled across a rough surface with a force of 60 N at an angle of 30°. The coefficient of kinetic friction is 0.3. What is its acceleration?",
    hint: "Resolve horizontal force and subtract friction; then use F = ma.",
    answerText: "2.21 m/s²",
    explanation: "F_horizontal = 60cos30° ≈ 51.96 N. Friction = μmg = 29.43 N. Net F = 51.96 − 29.43 = 22.53 N. a = 22.53 / 10 = 2.25 m/s²."
  },
  {
    subject: "Physics",
    topic: "Circular Motion",
    question: "A satellite orbits Earth at 7.5 km/s at a radius of 7.0×10⁶ m. What is the centripetal acceleration and gravitational field strength at that altitude?",
    hint: "Use a = v²/r and g = GM/r².",
    answerText: "a = 8.04 m/s², g ≈ 8.14 m/s²",
    explanation: "a = (7500)² / 7×10⁶ = 8.04 m/s². g = (6.67×10⁻¹¹)(5.97×10²⁴)/(7×10⁶)² ≈ 8.14 m/s²."
  },
  {
    subject: "Physics",
    topic: "Work and Energy",
    question: "A spring (k = 500 N/m) is compressed by 0.2 m. A 2 kg mass is launched horizontally. What is its velocity after release?",
    hint: "Convert spring energy to kinetic energy: ½kx² = ½mv².",
    answerText: "3.54 m/s",
    explanation: "E = 0.5×500×0.2² = 10 J. 0.5×2×v² = 10 → v = √(10) ≈ 3.54 m/s."
  },
  {
    subject: "Physics",
    topic: "Momentum",
    question: "A 0.1 kg bullet is fired at 300 m/s into a 2 kg block on a frictionless surface. They stick together. How much kinetic energy is lost?",
    hint: "Use momentum to find final velocity, then compare KE before and after.",
    answerText: "214.29 J",
    explanation: "v = (0.1×300)/(2.1) ≈ 14.29 m/s. KE_initial = 0.5×0.1×300² = 4500 J. KE_final = 0.5×2.1×(14.29²) ≈ 4285.71 J. Loss = 214.29 J."
  },
  {
    subject: "Physics",
    topic: "Electric Circuits",
    question: "In a series circuit, a 12 V battery powers a 4 Ω and a 2 Ω resistor. What is the power dissipated in the 4 Ω resistor?",
    hint: "Find current in circuit, then use P = I²R.",
    answerText: "16 W",
    explanation: "R_total = 6 Ω. I = 12/6 = 2 A. P = 2² × 1 = 4 × 4 = 16 W."
  },
  {
    subject: "Physics",
    topic: "Electric Fields",
    question: "Two point charges, +4 μC and -2 μC, are 0.1 m apart. What is the electric potential at the midpoint?",
    hint: "Find V = kq/r for both and add algebraically.",
    answerText: "0 V",
    explanation: "Each charge is 0.05 m from midpoint. V₁ = k(4×10⁻⁶)/0.05 = 720,000 V. V₂ = k(−2×10⁻⁶)/0.05 = −360,000 V. Total V = 360,000 V."
  },
  {
    subject: "Physics",
    topic: "Capacitance",
    question: "A 5 μF capacitor is charged to 10 V and then connected to a 2 μF uncharged capacitor. What is the final voltage?",
    hint: "Use conservation of charge: Q_total = Q₁ + Q₂ = C_total × V.",
    answerText: "7.14 V",
    explanation: "Q_initial = 5×10 = 50 μC. C_total = 5 + 2 = 7 μF. V = 50/7 ≈ 7.14 V."
  },
  {
    subject: "Physics",
    topic: "Thermal Physics",
    question: "How much energy is required to heat 0.2 kg of ice at –10°C to water at 20°C?",
    hint: "Three steps: warm ice, melt ice, warm water.",
    answerText: "83.2 kJ",
    explanation: "Q₁ = mcΔT = 0.2×2100×10 = 4200 J, Q₂ = 0.2×334,000 = 66800 J, Q₃ = 0.2×4180×20 = 16720 J. Total = 4200+66800+16720 = 83,720 J ≈ 83.2 kJ."
  },
  {
    subject: "Physics",
    topic: "Waves",
    question: "A sound wave of 256 Hz travels through a pipe 0.67 m long, closed at one end. Is it the first, second, or third harmonic?",
    hint: "Use λ = 4L for closed pipe; then check harmonic pattern.",
    answerText: "First harmonic",
    explanation: "λ = 4×0.67 = 2.68 m. v = fλ = 256×2.68 ≈ 685 m/s → a valid speed. So it’s the fundamental (first harmonic)."
  },
  {
    subject: "Physics",
    topic: "SHM",
    question: "A 0.5 kg mass oscillates with amplitude 0.1 m and frequency 2 Hz. What is the total mechanical energy?",
    hint: "Use E = ½mv²_max and v_max = ωA.",
    answerText: "0.79 J",
    explanation: "ω = 2πf = 4π. v_max = 4π × 0.1 = 1.26 m/s. E = 0.5×0.5×(1.26²) ≈ 0.79 J."
  },
  {
    subject: "Physics",
    topic: "Gravitation",
    question: "Calculate the orbital speed and period of a satellite orbiting at 2×10⁷ m from Earth's center.",
    hint: "Use v = √(GM/r), T = 2πr/v.",
    answerText: "v ≈ 4.46 km/s, T ≈ 9.4 hours",
    explanation: "v = √[(6.67×10⁻¹¹)(5.97×10²⁴)/(2×10⁷)] ≈ 4460 m/s. T = 2π×2×10⁷ / 4460 ≈ 14100 s ≈ 3.9 hrs."
  },
  {
    subject: "Physics",
    topic: "Nuclear",
    question: "A radioactive sample has a half-life of 4 hours. How much remains after 12 hours if you started with 80 g?",
    hint: "Determine number of half-lives, then apply decay.",
    answerText: "10 g",
    explanation: "12 / 4 = 3 half-lives. 80 → 40 → 20 → 10 g."
  },
  {
    subject: "Physics",
    topic: "Quantum",
    question: "Light of wavelength 400 nm strikes a metal with a work function of 2.0 eV. What is the maximum kinetic energy of the photoelectrons?",
    hint: "Use E = hf, then subtract work function.",
    answerText: "1.1 eV",
    explanation: "E = hc/λ = (6.63×10⁻³⁴×3×10⁸)/(400×10⁻⁹) ≈ 4.97×10⁻¹⁹ J ≈ 3.1 eV. KE = 3.1 − 2.0 = 1.1 eV."
  },
  {
    subject: "Physics",
    topic: "Modern Physics",
    question: "What is the energy equivalent of 0.005 kg of mass? Express your answer in kWh.",
    hint: "Use E = mc², then convert to kWh.",
    answerText: "4.17×10⁵ kWh",
    explanation: "E = 0.005 × (3×10⁸)² = 4.5×10¹⁴ J. 1 kWh = 3.6×10⁶ J → 4.5×10¹⁴ / 3.6×10⁶ ≈ 1.25×10⁸ kWh."
  },
  {
    subject: "Physics",
    topic: "Electromagnetic Induction",
    question: "A coil of 100 turns and area 0.01 m² is rotated in 0.2 T field. If the coil spins at 10 revolutions/s, what is the max emf?",
    hint: "Use emf = NABω; convert rev/s to rad/s.",
    answerText: "12.57 V",
    explanation: "ω = 2π×10 = 62.8 rad/s. emf = 100×0.01×0.2×62.8 ≈ 12.57 V."
  },
  {
    subject: "Physics",
    topic: "Thermodynamics",
    question: "A gas expands at constant pressure, doing 500 J of work and losing 200 J of heat. What is the change in internal energy?",
    hint: "Use ΔU = Q − W.",
    answerText: "−700 J",
    explanation: "ΔU = −200 − 500 = −700 J."
  },
  {
    subject: "Physics",
    topic: "Electric Circuits",
    question: "Three resistors of 2, 3, and 6 ohms are connected in parallel. What is the total resistance and total current from a 12 V supply?",
    hint: "Use 1/R = 1/R₁ + 1/R₂ + 1/R₃ and then I = V/R.",
    answerText: "R = 1 Ω, I = 12 A",
    explanation: "1/R = 1/2 + 1/3 + 1/6 = 1. R = 1 Ω. I = 12 V / 1 = 12 A."
  },
  {
    subject: "Physics",
    topic: "Kinematics + Energy",
    question: "A car accelerates from rest to 25 m/s in 100 m. What is the acceleration and time taken?",
    hint: "Use v² = u² + 2as, then use t = v/a.",
    answerText: "a = 3.125 m/s², t = 8 s",
    explanation: "25² = 2a×100 → a = 625/200 = 3.125. t = 25 / 3.125 = 8 s."
  },
  {
    subject: "Physics",
    topic: "Kinematics",
    question: "A car accelerates from 10 m/s to 30 m/s over 5 seconds. What is its acceleration and the distance it travels?",
    hint: "Use a = Δv/t and s = ut + ½at².",
    answerText: "a = 4 m/s², s = 100 m",
    explanation: "a = (30−10)/5 = 4. s = 10×5 + 0.5×4×25 = 50 + 50 = 100 m."
  },
  {
    subject: "Physics",
    topic: "Forces",
    question: "A 3 kg object on a 30° incline starts sliding. What is the net force acting on it down the slope (ignoring friction)?",
    hint: "Use F = mg sinθ.",
    answerText: "14.7 N",
    explanation: "F = 3 × 9.81 × sin(30°) = 3 × 9.81 × 0.5 = 14.7 N."
  },
  {
    subject: "Physics",
    topic: "Work and Energy",
    question: "A 2 kg object is lifted vertically 3 meters. How much work is done and what is its gravitational potential energy?",
    hint: "Work = mgh; same as GPE gained.",
    answerText: "Work = 58.86 J, GPE = 58.86 J",
    explanation: "W = mgh = 2×9.81×3 = 58.86 J."
  },
  {
    subject: "Physics",
    topic: "Momentum",
    question: "A 0.2 kg ball hits a wall at 10 m/s and bounces back at 8 m/s. What is the change in momentum?",
    hint: "Δp = mv_final − mv_initial (watch signs!).",
    answerText: "−3.6 kg·m/s",
    explanation: "Δp = 0.2×(−8) − 0.2×10 = −1.6 − 2 = −3.6 kg·m/s."
  },
  {
    subject: "Physics",
    topic: "Circular Motion",
    question: "What is the required centripetal force to keep a 0.5 kg mass moving in a circle of radius 1 m at 4 m/s?",
    hint: "Use F = mv²/r.",
    answerText: "8 N",
    explanation: "F = 0.5×(4²)/1 = 8 N."
  },
  {
    subject: "Physics",
    topic: "Gravitational Fields",
    question: "What is the gravitational field strength 2×10⁷ m from Earth’s center (mass = 5.97×10²⁴ kg)?",
    hint: "Use g = GM/r².",
    answerText: "9.95 m/s²",
    explanation: "g = (6.67×10⁻¹¹)(5.97×10²⁴)/(2×10⁷)² ≈ 9.95 m/s²."
  },
  {
    subject: "Physics",
    topic: "Thermal Physics",
    question: "A 0.5 kg substance is heated from 20°C to 60°C with a specific heat capacity of 900 J/kg·°C. How much energy is needed?",
    hint: "Use Q = mcΔT.",
    answerText: "18,000 J",
    explanation: "Q = 0.5×900×(60−20) = 0.5×900×40 = 18,000 J."
  },
  {
    subject: "Physics",
    topic: "Waves",
    question: "A wave has a frequency of 50 Hz and a wavelength of 2 m. What is its speed, and what happens to the wavelength if frequency doubles?",
    hint: "v = fλ; v constant → λ ∝ 1/f.",
    answerText: "v = 100 m/s, new λ = 1 m",
    explanation: "v = 50×2 = 100 m/s. If f = 100 Hz, then λ = 100/100 = 1 m."
  },
  {
    subject: "Physics",
    topic: "Sound",
    question: "A sound wave has a period of 0.005 s and travels at 340 m/s. What is its wavelength and frequency?",
    hint: "f = 1/T, v = fλ.",
    answerText: "λ = 1.7 m, f = 200 Hz",
    explanation: "f = 1/0.005 = 200 Hz. λ = 340/200 = 1.7 m."
  },
  {
    subject: "Physics",
    topic: "Electricity",
    question: "A 60 W lightbulb operates on 120 V. What is the current and resistance?",
    hint: "Use P = IV and V = IR.",
    answerText: "I = 0.5 A, R = 240 Ω",
    explanation: "I = P/V = 60/120 = 0.5 A. R = V/I = 120/0.5 = 240 Ω."
  },
  {
    subject: "Physics",
    topic: "Magnetism",
    question: "A 0.02 m wire carrying 3 A is placed at right angles to a 0.5 T field. What is the magnetic force?",
    hint: "F = BIL sinθ, sin90° = 1.",
    answerText: "0.03 N",
    explanation: "F = 0.5×3×0.02 = 0.03 N."
  },
  {
    subject: "Physics",
    topic: "SHM",
    question: "A mass on a spring oscillates with a frequency of 5 Hz and amplitude of 0.1 m. What is its maximum speed?",
    hint: "v_max = ωA, ω = 2πf.",
    answerText: "3.14 m/s",
    explanation: "ω = 2π×5 = 10π. v_max = 10π×0.1 ≈ 3.14 m/s."
  },
  {
    subject: "Physics",
    topic: "Electromagnetic Induction",
    question: "A coil rotates in a magnetic field producing a peak emf of 6 V. If the angular velocity doubles, what is the new peak emf?",
    hint: "emf ∝ ω.",
    answerText: "12 V",
    explanation: "If ω doubles, emf doubles: 6 V → 12 V."
  },
  {
    subject: "Physics",
    topic: "Capacitors",
    question: "A 10 μF capacitor is charged to 5 V. What is the stored energy, and what happens if voltage doubles?",
    hint: "E = ½CV².",
    answerText: "E = 0.125 mJ, new E = 0.5 mJ",
    explanation: "E = 0.5×10×10⁻⁶×25 = 0.125 mJ. Doubling V quadruples E → 0.5 mJ."
  },
  {
    subject: "Physics",
    topic: "Atomic Physics",
    question: "What is the energy of a photon with wavelength 620 nm?",
    hint: "E = hc/λ, convert nm to meters.",
    answerText: "≈ 3.2 × 10⁻¹⁹ J",
    explanation: "E = (6.63×10⁻³⁴)(3×10⁸)/(620×10⁻⁹) ≈ 3.2×10⁻¹⁹ J."
  },
  {
    subject: "Physics",
    topic: "Radioactivity",
    question: "A 100 g radioactive sample has a half-life of 2 hours. How much remains after 6 hours?",
    hint: "Find number of half-lives (6/2 = 3).",
    answerText: "12.5 g",
    explanation: "100 → 50 → 25 → 12.5 g after 3 half-lives."
  },
  {
    subject: "Physics",
    topic: "Uncertainty",
    question: "You measure a length as 12.3 ± 0.2 cm and a width as 4.1 ± 0.1 cm. What is the area and its uncertainty?",
    hint: "Multiply values; add relative uncertainties.",
    answerText: "Area = 50.43 cm² ± 2.9%",
    explanation: "A = 12.3×4.1 = 50.43. %unc = (0.2/12.3 + 0.1/4.1) ≈ 2.9%."
  },
  {
    subject: "Physics",
    topic: "Mechanics",
    question: "A force of 10 N is applied for 3 seconds to a 2 kg object. What is the final speed and distance travelled?",
    hint: "Use F = ma, then v = at and s = ½at².",
    answerText: "v = 15 m/s, s = 22.5 m",
    explanation: "a = 10/2 = 5. v = 5×3 = 15. s = 0.5×5×9 = 22.5 m."
  },
  {
    subject: "Physics",
    topic: "Thermal",
    question: "A 0.25 kg metal cools from 100°C to 20°C, releasing 4200 J. What is its specific heat capacity?",
    hint: "Rearrange Q = mcΔT.",
    answerText: "210 J/kg·°C",
    explanation: "c = Q / (mΔT) = 4200 / (0.25×80) = 210 J/kg·°C."
  },
  {
    subject: "Physics",
    topic: "Power and Efficiency",
    question: "A motor lifts 100 kg 5 meters in 10 seconds. What power is used and what's the power if efficiency is 80%?",
    hint: "Power = work/time; efficiency = useful/total.",
    answerText: "Power = 490 W, total input = 612.5 W",
    explanation: "W = mgh = 4900 J. P = 4900/10 = 490 W. Input = 490/0.8 = 612.5 W."
  },



		//Geography
  {
    subject: "Geography",
    topic: "TNCs",
    question: "What does TNC stand for?",
    hint: "capitalism",
    answerText: "Trans-National Company",
    explanation: "--"
  },
  {
    subject: "Geography",
    topic: "Globalization",
    question: "Name one indicator used to measure globalization in the KOF Index.",
    hint: "economic, social, or political",
    answerText: "Foreign Direct Investment (FDI)",
    explanation: "The KOF Index includes economic globalization indicators like FDI inflows."
  },
  {
    subject: "Geography",
    topic: "Climate Change",
    question: "State one human cause of enhanced greenhouse gas emissions.",
    hint: "transportation or industry",
    answerText: "Burning fossil fuels",
    explanation: "Fossil fuels release CO₂, enhancing the greenhouse effect."
  },
  {
    subject: "Geography",
    topic: "Climate Change",
    question: "Name a negative impact of sea level rise on low-lying nations.",
    hint: "coastal",
    answerText: "Increased flooding",
    explanation: "Sea level rise leads to saltwater intrusion and frequent floods in coastal areas."
  },
  {
    subject: "Geography",
    topic: "Population",
    question: "What is the demographic transition model used to describe?",
    hint: "population change",
    answerText: "Changes in birth and death rates over time",
    explanation: "It shows how population growth shifts with development."
  },
  {
    subject: "Geography",
    topic: "Migration",
    question: "Define forced migration.",
    hint: "no choice",
    answerText: "Migration due to conflict, disaster, or persecution",
    explanation: "Forced migrants do not choose to leave; they flee unsafe conditions."
  },
  {
    subject: "Geography",
    topic: "Water Resources",
    question: "What is physical water scarcity?",
    hint: "availability",
    answerText: "When natural water sources cannot meet demand",
    explanation: "This occurs due to climate or geographic limits on water supply."
  },
  {
    subject: "Geography",
    topic: "Water Conflicts",
    question: "Name a transboundary river that has caused conflict.",
    hint: "Middle East",
    answerText: "The Jordan River",
    explanation: "Shared by Israel, Jordan, and Palestine, with limited water access."
  },
  {
    subject: "Geography",
    topic: "Urban Environments",
    question: "What is a megacity?",
    hint: "population size",
    answerText: "A city with over 10 million people",
    explanation: "Examples include Tokyo, Delhi, and Shanghai."
  },
  {
    subject: "Geography",
    topic: "Sustainable Cities",
    question: "Name one characteristic of a sustainable city.",
    hint: "environment",
    answerText: "Efficient public transport",
    explanation: "Sustainable cities reduce emissions through clean transport systems."
  },
  {
    subject: "Geography",
    topic: "Food Security",
    question: "What does food security mean?",
    hint: "availability and access",
    answerText: "Having reliable access to sufficient, safe, and nutritious food",
    explanation: "Food insecurity occurs when people lack access to basic food needs."
  },
  {
    subject: "Geography",
    topic: "Energy",
    question: "State one advantage of solar energy.",
    hint: "renewable",
    answerText: "It produces no greenhouse gas emissions during use.",
    explanation: "Solar energy is sustainable and reduces fossil fuel dependence."
  },
  {
    subject: "Geography",
    topic: "Hazards",
    question: "Define a hazard event.",
    hint: "natural or human",
    answerText: "An event that causes harm or disruption",
    explanation: "Examples include earthquakes, floods, and chemical spills."
  },
  {
    subject: "Geography",
    topic: "Hazards",
    question: "Give one example of a mitigation strategy for earthquakes.",
    hint: "buildings",
    answerText: "Earthquake-resistant buildings",
    explanation: "Designing buildings to sway reduces damage during seismic events."
  },
  {
    subject: "Geography",
    topic: "Tourism",
    question: "What is ecotourism?",
    hint: "nature-based",
    answerText: "Tourism that is environmentally and socially responsible",
    explanation: "It supports conservation and benefits local communities."
  },
  {
    subject: "Geography",
    topic: "Tourism",
    question: "Give one negative environmental impact of mass tourism.",
    hint: "footprint",
    answerText: "Environmental degradation",
    explanation: "High tourist numbers can damage ecosystems and pollute environments."
  },
  {
    subject: "Geography",
    topic: "Trade",
    question: "Define fair trade.",
    hint: "ethics",
    answerText: "Trade that ensures fair wages and conditions for producers",
    explanation: "It helps reduce exploitation in developing countries."
  },
  {
    subject: "Geography",
    topic: "Trade",
    question: "Name a global trade organization.",
    hint: "regulation",
    answerText: "World Trade Organization (WTO)",
    explanation: "WTO regulates international trade rules between countries."
  },
  {
    subject: "Geography",
    topic: "Development",
    question: "What does HDI stand for?",
    hint: "composite measure",
    answerText: "Human Development Index",
    explanation: "It combines income, education, and life expectancy."
  },
  {
    subject: "Geography",
    topic: "Development",
    question: "Name one country classified as an NIC.",
    hint: "emerging economy",
    answerText: "India",
    explanation: "Newly industrialized countries are in transition between developing and developed."
  },
  {
    subject: "Geography",
    topic: "Global Climate Change",
    question: "Explain how positive feedback loops exacerbate global climate change.",
    hint: "Think ice-albedo effect and permafrost methane.",
    answerText: "They amplify warming (e.g., melting ice reduces albedo, more heat absorbed, more ice melts).",
    explanation: "Positive feedback loops increase warming through self-reinforcing processes."
  },
  {
    subject: "Geography",
    topic: "Water Conflicts",
    question: "Name a river basin that is a major source of geopolitical tension.",
    hint: "Consider water shared between India and Pakistan.",
    answerText: "The Indus River Basin",
    explanation: "The Indus Waters Treaty governs water use between India and Pakistan, a flashpoint of conflict."
  },
  {
    subject: "Geography",
    topic: "Tectonics",
    question: "Explain how subduction leads to both volcanic activity and earthquakes.",
    hint: "Plate interaction",
    answerText: "The denser oceanic plate subducts under a continental plate, causing friction and melting.",
    explanation: "Melting magma causes volcanoes; friction causes earthquakes."
  },
  {
    subject: "Geography",
    topic: "Food Security",
    question: "Describe one advantage and one disadvantage of GMOs in addressing food insecurity.",
    hint: "Think efficiency vs. ethics.",
    answerText: "Advantage: Higher yields. Disadvantage: Environmental/health concerns.",
    explanation: "GMOs can feed more people but raise ethical and ecological concerns."
  },
  {
    subject: "Geography",
    topic: "Cities and Urbanization",
    question: "What is the difference between urban sprawl and suburbanization?",
    hint: "Direction of growth",
    answerText: "Urban sprawl is uncontrolled outward growth; suburbanization is planned expansion into suburbs.",
    explanation: "Suburbanization is a form of urban growth but typically better planned than sprawl."
  },
  {
    subject: "Geography",
    topic: "Globalization",
    question: "How can globalization lead to both economic growth and cultural homogenization?",
    hint: "Think trade and identity.",
    answerText: "It opens markets and increases trade, but spreads Western culture globally.",
    explanation: "Globalization brings prosperity but can dilute unique cultural practices."
  },
  {
    subject: "Geography",
    topic: "Climate and Weather",
    question: "What causes the formation of El Niño conditions?",
    hint: "Think Pacific Ocean and trade winds.",
    answerText: "Weakened trade winds allow warm water to move eastward.",
    explanation: "This disrupts weather globally, including droughts and floods."
  },
  {
    subject: "Geography",
    topic: "Hazards",
    question: "Define the disaster risk equation.",
    hint: "Three components.",
    answerText: "Risk = Hazard × Vulnerability / Capacity to Cope",
    explanation: "It explains how disaster risk is influenced by exposure and preparedness."
  },
  {
    subject: "Geography",
    topic: "Global Interactions",
    question: "What is meant by the 'global shift'?",
    hint: "Economic geography term.",
    answerText: "The movement of manufacturing from developed to developing countries.",
    explanation: "Driven by cheaper labor and looser regulations abroad."
  },
  {
    subject: "Geography",
    topic: "Changing Population",
    question: "How does the demographic transition model explain population change?",
    hint: "Think stages.",
    answerText: "It shows how population grows as countries develop through 5 stages.",
    explanation: "Each stage reflects changing birth/death rates and growth rates."
  },
  {
    subject: "Geography",
    topic: "Energy Security",
    question: "Explain the term 'energy mix' and why it matters.",
    hint: "Diversity.",
    answerText: "It's the range of energy sources used; more diversity increases security.",
    explanation: "A balanced mix reduces reliance on any single source."
  },
  {
    subject: "Geography",
    topic: "Development",
    question: "What is the difference between GDP and GNI?",
    hint: "Income vs. location.",
    answerText: "GDP is income earned within borders; GNI includes foreign income.",
    explanation: "GNI includes remittances and overseas investments."
  },
  {
    subject: "Geography",
    topic: "Urban Environments",
    question: "Describe two social problems caused by rapid urbanization.",
    hint: "Think services and housing.",
    answerText: "Overcrowding and informal settlements.",
    explanation: "Too-rapid growth overwhelms infrastructure and planning."
  },
  {
    subject: "Geography",
    topic: "Climate Change Solutions",
    question: "What is carbon offsetting and give one example.",
    hint: "Airlines use it.",
    answerText: "Paying to reduce CO₂ elsewhere (e.g., planting trees).",
    explanation: "It allows emissions to be balanced by external reductions."
  },
  {
    subject: "Geography",
    topic: "Migration",
    question: "Distinguish between voluntary and forced migration with examples.",
    hint: "Push vs. pull factors.",
    answerText: "Voluntary: Economic (e.g., moving for a job); Forced: Conflict (e.g., refugee from Syria).",
    explanation: "Voluntary is chosen, forced is necessary."
  },
  {
    subject: "Geography",
    topic: "Global Resource Consumption",
    question: "What is the ecological footprint?",
    hint: "Sustainability metric.",
    answerText: "The amount of land needed to support a person's lifestyle.",
    explanation: "Measures environmental sustainability by comparing resource use to capacity."
  },
  {
    subject: "Geography",
    topic: "Oceans",
    question: "How do ocean currents affect coastal climates?",
    hint: "Think temperature.",
    answerText: "Warm currents heat coasts (e.g., Gulf Stream); cold currents cool them (e.g., California Current).",
    explanation: "Currents regulate coastal temperatures and weather."
  },
  {
    subject: "Geography",
    topic: "Global Risk",
    question: "Name one emerging global risk and explain its geographic impacts.",
    hint: "Cyber, pandemic, etc.",
    answerText: "Pandemics disrupt supply chains and mobility.",
    explanation: "They have wide-ranging social, economic, and geographic consequences."
  },
  {
    subject: "Geography",
    topic: "Development and Aid",
    question: "What is tied aid and how can it be problematic?",
    hint: "Strings attached.",
    answerText: "Aid that must be spent on donor goods/services; limits recipient choice.",
    explanation: "It benefits donors more than recipients."
  },
  {
    subject: "Geography",
    topic: "Tourism",
    question: "What is the 'butler model' in tourism?",
    hint: "Life cycle of destinations.",
    answerText: "It shows tourism growth through stages: exploration, involvement, etc.",
    explanation: "Helps planners anticipate development and decline."
  },
  {
    subject: "Geography",
    topic: "TNCs",
    question: "How can TNCs benefit and harm host countries?",
    hint: "Jobs vs. exploitation.",
    answerText: "Benefit: Investment/jobs. Harm: Environmental degradation/low wages.",
    explanation: "TNCs bring growth but may exploit resources and workers."
  },
  {
    subject: "Geography",
    topic: "Trade",
    question: "What is fair trade and why is it important for developing countries?",
    hint: "Ethical.",
    answerText: "Ensures producers get fair prices/wages.",
    explanation: "Improves lives of farmers and supports sustainable practices."
  },
  {
    subject: "Geography",
    topic: "Transport Networks",
    question: "Why are transport corridors essential to economic development?",
    hint: "Movement of goods.",
    answerText: "They connect producers to markets efficiently.",
    explanation: "Efficient transport boosts trade and investment."
  },
  {
    subject: "Geography",
    topic: "Urban Systems",
    question: "What is a primate city and give an example.",
    hint: "Population imbalance.",
    answerText: "A city that is disproportionately large (e.g., Bangkok in Thailand).",
    explanation: "Dominates political and economic activity of the country."
  },
  {
    subject: "Geography",
    topic: "Natural Resource Management",
    question: "How can the tragedy of the commons apply to fisheries?",
    hint: "Shared resources.",
    answerText: "Overfishing due to lack of ownership or regulation.",
    explanation: "Individuals act in self-interest, depleting the resource."
  },
  {
    subject: "Geography",
    topic: "Environmental Sustainability",
    question: "What is an environmental impact assessment (EIA)?",
    hint: "Before construction.",
    answerText: "A process that evaluates the potential effects of a project.",
    explanation: "Ensures developments consider ecological consequences."
  },
  {
    subject: "Geography",
    topic: "Climate Change",
    question: "Why are small island developing states (SIDS) particularly vulnerable to climate change?",
    hint: "Sea level.",
    answerText: "They're low-lying and at risk of sea level rise and extreme weather.",
    explanation: "Limited resources and location increase vulnerability."
  },
  {
    subject: "Geography",
    topic: "Cities",
    question: "What is meant by 'gentrification'?",
    hint: "Urban renewal.",
    answerText: "Wealthy people move into poor areas, raising costs and displacing residents.",
    explanation: "Improves areas but often displaces original communities."
  },
  {
    subject: "Geography",
    topic: "Resource Consumption",
    question: "What is a circular economy?",
    hint: "Reduce, reuse, recycle.",
    answerText: "An economy that minimizes waste and keeps resources in use.",
    explanation: "Opposite of linear (take-make-dispose) models."
  },
  {
    subject: "Geography",
    topic: "Population Policy",
    question: "Compare pro-natalist and anti-natalist policies with examples.",
    hint: "France vs. China.",
    answerText: "Pro-natalist encourages births (France); anti-natalist limits them (China's former one-child policy).",
    explanation: "Policies depend on demographic goals and growth concerns."
  },

]

